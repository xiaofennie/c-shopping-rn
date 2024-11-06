import { View, Text } from 'react-native'

import Loading from './Loading'
import Logo from '../svgs/logo'

export default function BigLoading() {
  return (
    <View className="flex items-center p-4 mx-auto space-y-4 text-center rounded-lg bg-yellow-100/50 max-w-max ">
      {/* <Logo className="w-32 h-10 mx-auto" /> */}
      <Text className="text-center text-stone-600 text-4xl font-bold">floor</Text>
      <Loading />
    </View>
  )
}
