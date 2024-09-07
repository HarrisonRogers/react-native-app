import { View, Text } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'

// Prevent splash screen from auto hiding until all font assets
SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Mono': require('../assets/fonts/RobotoMono-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded) return null
  if (!fontsLoaded && !error) return null

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
