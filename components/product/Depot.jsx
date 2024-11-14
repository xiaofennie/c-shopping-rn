import { Text, View } from 'react-native'

import StockSvg from '../svgs/stock.svg'

import { formatNumber } from '@/utils'

const Depot = ({ inStock }) => {
  //? Render(s)
  if (inStock < 10 && inStock !== 0) {
    return (
      <View className="flex flex-row items-center gap-x-1">
        <StockSvg style={{ color: '#ffba73' }} />
        <Text className="text-[#ffba73] px-1">Left {formatNumber(inStock)}</Text>
      </View>
    )
  } else if (inStock > 10) {
    return (
      <View className="flex flex-row items-center gap-x-1">
        <StockSvg style={{ color: '#9a1c59' }} />
        <Text className="text-primary px-1">In stock</Text>
      </View>
    )
  } else if (inStock === 0) {
    return (
      <View className="flex flex-row items-center gap-x-1">
        <StockSvg style={{ color: 'rgb(185 28 28)' }} />
        <Text className="text-red-700 px-1">Out of stock</Text>
      </View>
    )
  }
}

export default Depot
