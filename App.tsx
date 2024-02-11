import React from 'react';
import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Root from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import registerForPushNotificationsAsync from './src/utils/registerForPushNotificationsAsync';
import { LocationProvider } from './src/context/location';
import { ToastProvider } from 'react-native-toast-notifications';
import { FontAwesome5 } from '@expo/vector-icons';

LogBox.ignoreAllLogs();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <StatusBar style="light" />
      <LocationProvider>
        <ToastProvider
          successColor="#47B881"
          successIcon={
            <FontAwesome5 name="check-circle" size={16} color="white" />
          }>
          <Root />
        </ToastProvider>
      </LocationProvider>
    </TamaguiProvider>
  );
}
