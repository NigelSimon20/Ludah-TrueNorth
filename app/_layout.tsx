import 'react-native-gesture-handler';
import '../global.css';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  DMSans_400Regular_Italic,
} from '@expo-google-fonts/dm-sans';
import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-display';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMSans_400Regular_Italic,
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="onboarding/step1" />
          <Stack.Screen name="onboarding/step2" />
          <Stack.Screen name="onboarding/step3" />
          <Stack.Screen name="onboarding/step4" />
          <Stack.Screen name="account" />
          <Stack.Screen name="setup" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="lesson" />
          <Stack.Screen name="complete" />
          <Stack.Screen name="path-detail" />
          <Stack.Screen name="situation" />
          <Stack.Screen name="notifications" />
          <Stack.Screen name="empty" />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
