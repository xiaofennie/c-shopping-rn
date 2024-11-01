import { Text, View } from 'react-native'

import Icons from '../common/Icons'

import { formatNumber } from '@/utils'

const Depot = ({ inStock }) => {
  //? Render(s)
  if (inStock < 10 && inStock !== 0) {
    return <Text className="text-red-500">Only left{formatNumber(inStock)}</Text>
  } else if (inStock > 10) {
    return (
      <View className="flex flex-row items-center text-green-700 gap-x-1">
        <Icons.FontAwesome name="save" size={16} className="text-green-700" />
        <Text className="text-green-700">On sale</Text>
      </View>
    )
  } else if (inStock === 0) {
    return null
  }
}

export default Depot
