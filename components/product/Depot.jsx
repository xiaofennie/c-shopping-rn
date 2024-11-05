import { Text, View } from 'react-native'

import Icons from '../common/Icons'

import { formatNumber } from '@/utils'

const Depot = ({ inStock }) => {
  //? Render(s)
  if (inStock < 10 && inStock !== 0) {
    return <Text className="text-red-500">Only left{formatNumber(inStock)}</Text>
  } else if (inStock > 10) {
    return (
      <View className="flex flex-row items-center text-[#5b8c00] gap-x-1">
        <Icons.FontAwesome name="truck" size={16} className="text-[#5b8c00]" />
        <Text className="text-[#5b8c00]">In stock</Text>
      </View>
    )
  } else if (inStock === 0) {
    return null
  }
}

export default Depot
