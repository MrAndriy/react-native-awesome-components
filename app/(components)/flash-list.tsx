import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { FlashList } from '@shopify/flash-list'

const Page = () => {
  const DATA = Array.from(Array(500).keys()).map((_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `Description ${i}`,
    image: `https://picsum.photos/id/${i}/200/200`,
  }))

  return (
    <View className="flex-1 px-4 py-2">
      <FlashList
        data={DATA}
        renderItem={({ item }) => (
          <View className="flex-1 flex-row items-center gap-3 mb-2">
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 10 }} />
            <Text>{item.title}</Text>
          </View>
        )}
        estimatedItemSize={200}
      />
    </View>
  )
}

export default Page
