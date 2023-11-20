import * as Notifications from 'expo-notifications';

type Props = {
  title?: string;
  body?: string;
  seconds?: number;
};

const schedulePushNotification = ({ title, body, seconds = 2 }: Props) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: { seconds },
  });
};

export default schedulePushNotification;
