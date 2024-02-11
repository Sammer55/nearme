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
import { formatDistanceToNow } from 'date-fns';
import { useLocation } from '@/context/location';
import haversineDistance from '@/utils/haversineDistance';
import openGoogleMapsWithDirections from '@/utils/openDirections';

type Props = {
  route?: {
    params?: {
      eventId?: number;
    };
  };
};

type DetailsItemProps = {
  icon: React.ReactNode;
  text?: string | number;
  onPress?: () => void;
};

const EventScreen = ({ route }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const eventId = route?.params?.eventId;
  const event = events.find((item) => item.id === eventId);

  const [checks, setChecks] = useState(event?.checks || 0);

  const { top, bottom } = useSafeAreaInsets();

  const navigation = useNavigation();

  const handleCheck = () => {
    if (!isChecked) {
      schedulePushNotification({
        title: 'You subscribed to this event',
        body: `${event?.owner?.name} will notify you whenever there is news about the event.`,
        seconds: 1,
      });
    }

    setChecks(isChecked ? checks - 1 : checks + 1);

    setIsChecked(!isChecked);
  };

  const handleOpenMaps = () =>
    navigation.navigate('Maps', {
      initialRegion: {
        latitude: event?.latitude,
        longitude: event?.longitude,
      },
    });

  const startDate =
    event &&
    formatDistanceToNow(new Date(event?.date), {
      addSuffix: true,
    });

  const { location } = useLocation();

  const coords = !!event &&
    !!location && {
      userLatitude: location?.coords?.latitude,
      userLongitude: location?.coords?.longitude,
      destinyLatitude: event?.latitude,
      destinyLongitude: event?.longitude,
    };

  const distance = !!coords ? haversineDistance(coords) : '0';

  const handleOpenDirections = () =>
    !!coords && openGoogleMapsWithDirections(coords);

  const DetailsItem = ({ icon, text, onPress }: DetailsItemProps) => {
    const isPressable = !!onPress;

    const handlePress = () => isPressable && onPress();

    return (
      <YStack
        onPress={handlePress}
        pressStyle={isPressable ? { opacity: 0.5, y: -1 } : null}
        animation="bouncy"
        alignItems="center"
        space="$2"
        paddingVertical="$2"
        paddingHorizontal="$3"
        borderRadius="$1"
        backgroundColor="$backgroundPress">
        {icon}
        <H6 fontSize="$2">{text}</H6>
      </YStack>
    );
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
            <XStack
              height="50%"
              justifyContent="space-between"
              alignItems="flex-start">
              <Button
                onPress={() => navigation.goBack()}
                circular
                icon={
                  <FontAwesome5 name="chevron-left" size={16} color="white" />
                }
              />
              <XStack
                backgroundColor="$primary"
                paddingVertical="$2"
                paddingHorizontal="$3"
                space="$2"
                borderRadius="$10">
                <FontAwesome name="calendar-o" size={16} color="white" />
                <Text>{startDate}</Text>
              </XStack>
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

              <XStack
                backgroundColor="$background"
                space
                padding="$2"
                borderRadius="$2">
                <DetailsItem
                  icon={
                    <FontAwesome
                      name="calendar-check-o"
                      size={16}
                      color="white"
                    />
                  }
                  text={checks}
                />

                <DetailsItem
                  icon={<FontAwesome name="eye" size={16} color="white" />}
                  text={event?.views}
                />

                <DetailsItem
                  icon={
                    <FontAwesome name="map-marker" size={16} color="white" />
                  }
                  text="Maps"
                  onPress={handleOpenMaps}
                />

                <DetailsItem
                  icon={<FontAwesome5 name="route" size={16} color="white" />}
                  text={distance}
                  onPress={handleOpenDirections}
                />
              </XStack>

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
