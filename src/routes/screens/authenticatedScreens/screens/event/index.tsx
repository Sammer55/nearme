import { events } from '@/db/events';
import { BlurView } from 'expo-blur';
import { ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Avatar,
  Button,
  H3,
  H6,
  ScrollView,
  Text,
  XStack,
  YStack,
} from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RenderTag from '@/utils/renderTag';
import { useState } from 'react';
import schedulePushNotification from '@/utils/pushLocalNotification';

const EventScreen = ({ route }) => {
  const [isChecked, setIsChecked] = useState(false);

  const eventId = route?.params?.eventId;

  const { top, bottom } = useSafeAreaInsets();

  const event = events.find((item) => item.id === eventId);

  const navigation = useNavigation();

  const handleCheck = () => {
    if (!isChecked) {
      schedulePushNotification({
        title: 'You subscribed to this event',
        body: `${event?.owner?.name} will notify you whenever there is news about the event.`,
        seconds: 1,
      });
    }

    setIsChecked(!isChecked);
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={{ uri: event?.image }}>
      <BlurView intensity={20} style={{ flex: 1 }}>
        <LinearGradient
          paddingHorizontal="$3"
          paddingTop={top}
          paddingBottom={bottom}
          colors={['transparent', 'black']}
          start={[0.2, 0.3]}
          end={[0, 1]}
          flex={1}
          position="relative"
          justifyContent="space-between">
          <ScrollView showsVerticalScrollIndicator={false} flex={1}>
            <XStack height="50%">
              <Button
                onPress={() => navigation.goBack()}
                circular
                icon={
                  <FontAwesome5 name="chevron-left" size={16} color="white" />
                }
              />
            </XStack>
            <YStack space>
              <XStack space="$2">
                <Avatar
                  borderWidth={1}
                  borderColor="white"
                  borderRadius="$5"
                  size="$4">
                  <Avatar.Image
                    accessibilityLabel={event?.owner?.name}
                    src={event?.owner.avatar}
                  />
                  <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                </Avatar>
                <YStack space="$1">
                  <H6>{event?.owner?.name}</H6>
                  <XStack space="$2">
                    <FontAwesome5
                      name="map-marker-alt"
                      size={16}
                      color="white"
                    />
                    <Text>{event?.owner.address}</Text>
                  </XStack>
                </YStack>
              </XStack>

              <XStack justifyContent="space-between" alignItems="center" space>
                <H3 flex={1}>{event?.name}</H3>
                <YStack
                  onPress={handleCheck}
                  pressStyle={{ opacity: 0.8, y: -2 }}
                  animation="bouncy"
                  height={40}
                  width={40}
                  backgroundColor={isChecked ? '$green9' : '$primary'}
                  borderRadius="$3"
                  alignItems="center"
                  justifyContent="center">
                  <FontAwesome
                    name={isChecked ? 'calendar-check-o' : 'hand-o-right'}
                    size={16}
                    color="white"
                  />
                  {!isChecked && <Text fontSize="$1">Check</Text>}
                </YStack>
              </XStack>

              {event?.tags.map((item) => <RenderTag tag={item} />)}

              <Text lineHeight={20} letterSpacing={0.5}>
                {event?.description}
              </Text>
            </YStack>
          </ScrollView>
        </LinearGradient>
      </BlurView>
    </ImageBackground>
  );
};

export default EventScreen;
