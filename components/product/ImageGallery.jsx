import { View } from 'react-native'
import Swiper from 'react-native-swiper'

import ResponsiveImage from '../common/ResponsiveImage'

const ImageGallery = props => {
  //? Porps
  const { images, productName } = props

  //? Render(s)
  return (
    <View className="mb-5">
      <Swiper className="h-[100vw]" showsPagination activeDotColor="#9a1c59" dotColor="#E5E7EB">
        {images.map((image, index) => (
          <ResponsiveImage
            key={index}
            className="h-[100vw] w-full"
            imageStyles="h-[100vw] w-full"
            source={image.url}
            alt={productName}
          />
        ))}
      </Swiper>
    </View>
  )
}

export default ImageGallery
