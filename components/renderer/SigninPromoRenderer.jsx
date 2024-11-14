import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function SigninPromoRenderer(props) {
  //? Props
  const { tips = '立即登录，体验更多' } = props
  //? Handers
  const handleJumpLogin = () => {
    router.push('/login')
  }
  return (
    <View className="flex items-center justify-center h-full space-y-4 bg-white">
      <Image source={require('@/assets/images/sign-in-promo.png')} className="w-[100vw] h-[58vw]" />
      <View className="px-4 space-y-2 flex items-center justify-center">
        <Text className="text-lg">You have not signed in yet</Text>
        <Text className="text-sm">Sign in to experience more</Text>
      </View>
      <TouchableOpacity
        onPress={handleJumpLogin}
        className="py-2 px-8 flex-center bg-primary rounded-full"
      >
        <Text className="text-white font-semibold" href="/login">
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  )
}
