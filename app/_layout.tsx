import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Awesome components',
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/react-native-bouncy-checkbox"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/react-native-bottom-sheet"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/react-native-gifted-chat"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/chart"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/toast"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/skeleton"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/page-view"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/calendar"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
      <Stack.Screen
        name="(components)/flash-list"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#E2E8F0',
          },
        }}
      />
    </Stack>
  )
}
