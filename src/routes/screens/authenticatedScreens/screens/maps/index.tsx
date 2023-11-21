import { companies } from '@/db/companies';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  Button,
  H6,
  Image,
  Sheet,
  Stack,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { events } from '@/db/events';
import Tags from '../../tabs/feed/tags';
import { TagTypes } from '@/types/tags';
import { LinearGradient } from 'tamagui/linear-gradient';
import { StatusBar } from 'expo-status-bar';

const DEFAULT_LATITUDE = -23.4522276968196;
const DEFAULT_LONGITUDE = -46.64481884656898;

const MapsScreen = ({ route }) => {
  const [selectedTag, setSelectedTag] = useState<TagTypes | null>();

  const { top } = useSafeAreaInsets();

  const initialRegion = useMemo(() => route?.params?.initialRegion, [route]);

  const navigation = useNavigation();
  const handleOpenMarker = (id: number, type: 'company' | 'event') => {
    if (type === 'company')
      return navigation.navigate('Company', { companyId: id });

    if (type === 'event') return navigation.navigate('Event', { eventId: id });
  };

  const latitude = initialRegion?.latitude || DEFAULT_LATITUDE;
  const longitude = initialRegion?.longitude || DEFAULT_LONGITUDE;

  const companiesArray = companies.map((item) => ({
    ...item,
    type: 'company',
  }));

  const eventsArray = events.map((item) => ({
    ...item,
    type: 'event',
    avatar: item?.owner?.avatar,
  }));

  const markers = [...companiesArray, ...eventsArray];

  const filteredMarkers = useMemo(
    () =>
      markers.filter((item) => {
        if (selectedTag && selectedTag === 'all') return item;
        if (selectedTag) return item.tags.includes(selectedTag);
        return item;
      }),
    [selectedTag],
  );

  const screenIsFocused = useIsFocused();

  useEffect(() => {
    if (screenIsFocused) setSelectedTag(null);
  }, [screenIsFocused]);

  return (
    <View flex={1} paddingTop={top}>
      <StatusBar style="dark" />
      <XStack
        marginHorizontal="$3"
        backgroundColor="$background"
        paddingVertical="$2"
        paddingHorizontal="$4"
        borderRadius="$12"
        enterStyle={{
          x: -50,
          opacity: 0,
        }}
        animation="bouncy"
        justifyContent="space-between">
        <H6 numberOfLines={1} flex={1} space="$2">
          Explore your region
        </H6>
        <Button
          onPress={() => navigation.goBack()}
          circular
          size="$1"
          icon={<FontAwesome name="close" size={10} color="white" />}
        />
      </XStack>

      <MapView
        provider={PROVIDER_GOOGLE}
        followsUserLocation
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.0009,
        }}
        mapType="terrain"
        customMapStyle={mapStyle}
        moveOnMarkerPress
        showsUserLocation
        showsMyLocationButton
        style={{ width: '100%', height: '100%' }}>
        {filteredMarkers?.map(({ id, latitude, longitude, avatar, type }) => {
          return (
            <Marker
              key={id}
              coordinate={{
                latitude,
                longitude,
              }}
              onPress={() => handleOpenMarker(id, type)}>
              <Image
                borderWidth={2}
                borderColor={type === 'company' ? '$gray1' : '$orange11'}
                source={{ uri: avatar }}
                height={40}
                width={40}
                borderRadius={40}
              />
            </Marker>
          );
        })}
      </MapView>
      <Sheet
        open={true}
        zIndex={100_000}
        animation="lazy"
        defaultOpen
        snapPoints={[20, 5]}>
        <Sheet.Handle />
        <Sheet.Frame
          paddingVertical="$4"
          position="relative"
          justifyContent="center"
          space="$3">
          <XStack paddingHorizontal="$3" alignItems="center" space="$3">
            <LinearGradient
              colors={['$background', 'black']}
              start={[0.5, 0.2]}
              end={[0, 1]}
              width={40}
              height={40}
              borderRadius="$3"
              alignItems="center"
              justifyContent="center">
              <FontAwesome5 name="search" size={24} color="white" />
            </LinearGradient>
            <YStack space="$1">
              <Text>
                Searching by <H6 fontSize="$3">{selectedTag || 'all'}</H6>
              </Text>
              <Text>
                <H6 fontSize="$3">{filteredMarkers.length}</H6> results found.
              </Text>
            </YStack>
          </XStack>

          <Stack backgroundColor="$backgroundPress" paddingVertical="$2">
            <Tags onSelectTag={setSelectedTag} />
          </Stack>
        </Sheet.Frame>
      </Sheet>
    </View>
  );
};

const mapStyle = [
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export default MapsScreen;
