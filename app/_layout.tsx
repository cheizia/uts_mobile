import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  initialRouteName: 'login',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen 
        name="login" 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="input" 
        options={{ title: 'Input Nilai' }} 
      />
      <Stack.Screen 
        name="confirmation" 
        options={{ title: 'Konfirmasi' }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}