import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const colors = [
  'red',
  'green',
  'yellow',
  'blue',
  'orange',
  'purple',
  'pink',
  'black',
  'white',
  'gray',
  'indigo',
  'teal',
  'cyan',
  'lime',
  'fuchsia',
]

const ReactNativeBouncyCheckbox = () => {
  return (
    <ScrollView className="flex-1 py-2 px-4">
      {colors.map((color) => (
        <BouncyCheckbox
          className="mb-2.5"
          key={color}
          size={25}
          fillColor={color}
          unfillColor="#FFFFFF"
          text={color}
          iconStyle={{ borderColor: color }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: 'SpaceMono' }}
          onPress={(isChecked: boolean) => {}}
        />
      ))}
    </ScrollView>
  )
}

export default ReactNativeBouncyCheckbox
