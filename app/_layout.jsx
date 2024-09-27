import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';


export default function RootLayout() {
  useEffect(() => {
    // Lock the screen orientation to landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <>
      <StatusBar hidden/>
      <Stack screenOptions={{ tabBarVisible: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="MapScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SylhetRegion" options={{ headerShown: false }} />
        <Stack.Screen name="SylhetRegionMain" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
