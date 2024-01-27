import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React from 'react'
import { useCallback, useMemo, useRef } from 'react'
import { View, Text, Button } from 'react-native'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ReactNativeBottomSheet = () => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], [])
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()
  const handleCollapsePress = () => bottomSheetRef.current?.collapse()
  const snapToIndex = useCallback((index: number) => bottomSheetRef.current?.snapToIndex(index), [])

  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View className="flex-1 p-6 bg-white">
          <Button title="Open" onPress={handleOpenPress} />
          <Button title="Close" onPress={handleClosePress} />
          <Button title="Collapse" onPress={handleCollapsePress} />
          <Button title="Snap To 0" onPress={() => snapToIndex(0)} />
          <Button title="Snap To 1" onPress={() => snapToIndex(1)} />
          <Button title="Snap To 2" onPress={() => snapToIndex(2)} />

          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ backgroundColor: '#fff' }}
            backgroundStyle={{ backgroundColor: '#3730A3' }}
            backdropComponent={renderBackdrop}
          >
            <View className="flex-1 items-center">
              <Text className="text-white text-3xl">Awesome 🎉</Text>
              <Button title="Close" onPress={handleClosePress} />
            </View>
          </BottomSheet>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default ReactNativeBottomSheet
