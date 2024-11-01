import { FlashList } from '@shopify/flash-list'
import { Link } from 'expo-router'
import { View, Text, Image, Pressable } from 'react-native'

import FeedSectionContainer from '../common/FeedSectionContainer'
import Skeleton from '../common/Skeleton'

import { useGetProductsQuery } from '@/services'
import { truncate } from '@/utils'

const generateGroup = (arr, countNum) => {
  const result = []
  for (let i = 0; i < arr.length; i += countNum) {
    result.push(arr.slice(i, i + countNum))
  }
  return result
}
export default function BestSellsSlider(props) {
  //? Props
  const { categorySlug } = props

  //? Get Products Query
  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 2,
      page_size: 15,
      category: categorySlug,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products ? generateGroup(data?.data?.products, 2) : [],
        isLoading,
      }),
    }
  )

  //? Render(s)

  return (
    <FeedSectionContainer title="Best Selling">
      {isLoading ? (
        Array(2)
          .fill('_')
          .map((_, index) => (
            <Skeleton.Items key={index} className="flex flex-row p-2 space-x-4">
              <Skeleton.Item
                height="h-24"
                width="w-24"
                animated="background"
                className="rounded-md "
              />
              <Skeleton.Items className="flex items-start">
                <Skeleton.Item height="h-5" width="w-52" animated="background" className="mt-4" />
                <Skeleton.Item height="h-5" width="w-36" animated="background" className="mt-4" />
              </Skeleton.Items>
            </Skeleton.Items>
          ))
      ) : (
        <FlashList
          data={products}
          renderItem={({ item, index }) => (
            <View className="mr-4 w-full">
              {item.map((row, rowIndex) => (
                <Link
                  href={{
                    pathname: `/products/${row._id}`,
                  }}
                  key={row._id}
                  asChild
                  className="px-2 py-2 w-screen bg-gray-100 mb-3"
                >
                  <Pressable className="flex flex-row">
                    <Image
                      source={{
                        uri: row.images[0].url,
                      }}
                      className="w-24 h-24 shrink-0 mr-2 flex-none"
                    />
                    <View className="flex flex-1 flex-row items-center">
                      <Text className="text-2xl text-stone-700 mx-2">
                        {index * 2 + rowIndex + 1}
                      </Text>
                      <Text className="flex-auto">{truncate(row.title, 20)}</Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </View>
          )}
          horizontal
          estimatedItemSize={200}
        />
      )}
    </FeedSectionContainer>
  )
}
