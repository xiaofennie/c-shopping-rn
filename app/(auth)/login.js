import { yupResolver } from '@hookform/resolvers/yup'
import { Link, Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { Button, HandleResponse, Logo, TextField } from '@/components'
import { useAppDispatch } from '@/hooks'
import { useLoginMutation } from '@/services'
import { userLogin } from '@/store'
import { logInSchema } from '@/utils'

export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()

  //? Login User
  const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation()

  //? Form Hook
  const {
    handleSubmit,
    formState: { errors: formErrors },
    setFocus,
    control,
  } = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: { email: '', password: '' },
  })

  //? Focus On Mount
  useEffect(() => {
    setFocus('name')
  }, [])

  //? Handlers
  const onSubmit = ({ email, password }) => {
    if (email && password) {
      login({
        body: { email, password },
      })
    }
  }

  const onSuccess = () => {
    dispatch(userLogin(data.data.token))
    router.back()
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
          headerBackTitleVisible: false,
        }}
      />
      {/*  Handle Login Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message || '发生异常'}
          message={data?.message}
          onSuccess={onSuccess}
        />
      )}
      <View className="h-[100%]  bg-white pt-10">
        <View className="w-[100vw] px-8 py-6 space-y-4">
          {/* <Logo className="mx-auto w-40 h-16" /> */}
          <Text className="text-center text-[#faea71] text-4xl font-bold">floor</Text>
          <Text className=" mt-56">login</Text>
          <View className="space-y-0">
            <TextField
              errors={formErrors.email}
              placeholder="Email"
              name="email"
              keyboardType="email-address"
              autoCapitalize="none"
              control={control}
            />

            <TextField
              errors={formErrors.password}
              secureTextEntry
              placeholder="Password"
              name="password"
              control={control}
            />
            <Button isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
              Login
            </Button>
          </View>

          <View className="flex flex-row">
            <Text className="inline mr-2 text-gray-800 text-xs">I don't have an account yet.</Text>
            <Link replace href="/register" className="text-blue-400 text-xs">
              Go register
            </Link>
          </View>
        </View>
      </View>
    </>
  )
}
