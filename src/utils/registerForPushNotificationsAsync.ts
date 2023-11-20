import { Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    Alert.alert('Failed to get push token for push notification!');
    return;
  }

  token = (
    await Notifications.getExpoPushTokenAsync({
      projectId: '021cbad3-b30a-4d7b-b7d7-d8387148f9b0',
    })
  ).data;

  return token;
};

export default registerForPushNotificationsAsync;
