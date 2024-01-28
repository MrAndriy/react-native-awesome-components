import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'

const Page = () => {
  const [selected, setSelected] = useState('')

  return (
    <View className="flex-1 px-4 py-2 bg-slate-200">
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString)
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedColor: 'blue' },
        }}
      />
    </View>
  )
}

export default Page
