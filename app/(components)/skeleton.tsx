import { View, Text } from 'react-native'
import { Facebook, Instagram } from 'react-content-loader/native'

import React from 'react'

const Skeleton = () => {
  const MyFacebookLoader = () => <Facebook animate speed={1} backgroundColor="#333" width="100%" />
  const MyInstagramLoader = () => <Instagram animate backgroundColor="#333" foregroundColor="#999" speed={1} width="100%" />

  return (
    <View className="flex-1 bg-slate-200 px-2 py-2.5">
      <View className="w-full">
        <MyFacebookLoader />
      </View>
      <MyInstagramLoader />
    </View>
  )
}

export default Skeleton
