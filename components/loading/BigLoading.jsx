import { View, Text } from 'react-native'

import Loading from './Loading'
import Logo from '../Logo'

export default function BigLoading() {
  return (
    <View className="flex items-center p-2 mx-auto space-y-4 text-center rounded-lg bg-white max-w-max ">
      <View className="w-40 h-16 mx-auto">
        <Logo className="w-32 h-10 mx-auto" />
      </View>
      <Loading />
    </View>
  )
}
