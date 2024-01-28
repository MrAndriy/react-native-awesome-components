import { View, Text, Button } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'

const Page = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    })
  }

  return (
    <View className="flex-1">
      <Button title="Show toast" onPress={showToast} />
      <Toast />
    </View>
  )
}

export default Page
