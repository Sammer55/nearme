import { Card, H6, Image, Stack, Text, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EventType } from '@/types/events';
import { formatDistanceToNow } from 'date-fns';

type Props = {
  item: EventType;
};

const Event = ({ item }: Props) => {
  const navigation = useNavigation();

  const handleNavigateToCompany = () =>
    navigation.navigate('Company', { companyId: item?.id });

  const startDate = formatDistanceToNow(new Date(item.date), {
    addSuffix: true,
  });

  return (
    <Card
      onPress={handleNavigateToCompany}
      marginVertical="$2"
      animation="bouncy"
      enterStyle={{
        scale: 1.1,
        x: 150,
        opacity: 0,
      }}
      pressStyle={{ opacity: 0.8, y: -2 }}
      borderWidth={1}
      borderColor="$gray1"
      borderRadius={8}
      overflow="hidden">
      <Image width="100%" height={160} source={{ uri: item.image }} />
      <LinearGradient
        position="absolute"
        width="100%"
        height="100%"
        padding="$3"
        colors={['transparent', 'black']}
        start={[1, 0]}
        end={[1, 1]}>
        <YStack space="$3" justifyContent="space-between" height="100%">
          <XStack justifyContent="space-between">
            <Image
              source={{ uri: item.owner.avatar }}
              width={60}
              height={60}
              borderRadius="$3"
              borderWidth={1}
              borderColor="white"
            />
            <Stack>
              <XStack
                paddingVertical="$1"
                paddingHorizontal="$2"
                borderRadius="$2"
                backgroundColor="$primary"
                alignItems="center"
                opacity={0.9}
                space="$2">
                <FontAwesome name="calendar-o" size={16} color="white" />
                <H6 fontSize="$3">{startDate}</H6>
              </XStack>
            </Stack>
          </XStack>

          <YStack space="$2">
            <YStack>
              <XStack justifyContent="space-between">
                <H6>{item?.name}</H6>
              </XStack>
              <XStack space="$2">
                <FontAwesome name="map-marker" size={14} color="white" />
                <Text fontSize="$2">{item?.address}</Text>
              </XStack>
            </YStack>
          </YStack>
        </YStack>
      </LinearGradient>
    </Card>
  );
};

export default Event;
