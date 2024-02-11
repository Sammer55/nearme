import { H6, Text, XStack, YStack } from 'tamagui';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { AlertType } from '@/types/alerts';
import { LinearGradient } from 'tamagui/linear-gradient';
import { formatDistanceToNow } from 'date-fns';

type Props = {
  item: AlertType;
};

const Alert = ({ item }: Props) => {
  const types = {
    company: <FontAwesome5 name="store-alt" size={16} color="white" />,
    event: <FontAwesome name="calendar-o" size={16} color="white" />,
    weather: <FontAwesome5 name="cloud-sun-rain" size={16} color="white" />,
    posts: <FontAwesome name="feed" size={16} color="white" />,
  };

  const createdAt = formatDistanceToNow(new Date(item?.created_at), {
    addSuffix: true,
  });

  return (
    <XStack
      animation="lazy"
      enterStyle={{ opacity: 0, x: 100, scale: 0.5 }}
      pressStyle={{ y: -1 }}
      space="$3"
      backgroundColor="$backgroundPress"
      padding="$2"
      borderRadius="$2">
      <LinearGradient
        colors={['$yellow10', '$blue9']}
        start={[0, 1]}
        end={[0.8, 0.2]}
        width={40}
        height={40}
        alignItems="center"
        justifyContent="center"
        borderRadius="$2">
        {types[item.type]}
      </LinearGradient>
      <YStack flex={1} space="$2">
        <YStack>
          <H6 numberOfLines={1}>{item.title}</H6>
          <Text numberOfLines={2}>{item.description}</Text>
        </YStack>
        <Text fontSize="$1" color="$gray9" alignSelf="flex-end">
          {createdAt}
        </Text>
      </YStack>
    </XStack>
  );
};

export default Alert;
