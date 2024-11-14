import { Image, View } from 'react-native'

export default function Logo({ height, width }) {
  return (
    <Image
      className="w-40 h-16"
      source={require('@/assets/images/logo.jpg')}
      style={{ width: '100%', resizeMode: 'contain' }}
      alt="Kirin"
    />
  )
}
