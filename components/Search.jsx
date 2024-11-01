import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Icons from './common/Icons'

export default function Search(props) {
  //? Handlers
  const handleSearch = () => {
    router.push('/search')
  }

  //? Render(s)
  return (
    <TouchableOpacity
      onPress={handleSearch}
      className="flex flex-row rounded-md bg-zinc-200/80 justify-between items-center p-1"
    >
      <Text className="flex-grow py-1 p-3 text-left bg-transparent outline-none cursor-pointer text-gray-400 focus:border-none">
        Search...
      </Text>
      <Icons.EvilIcons name="search" size={24} color="#1F2937" />
    </TouchableOpacity>
  )
}
