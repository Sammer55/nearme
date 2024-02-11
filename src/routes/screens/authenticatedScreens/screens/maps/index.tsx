import { companies } from '@/db/companies';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, H6, Image, View, XStack } from 'tamagui';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DEFAULT_LATITUDE = -23.4522276968196;
const DEFAULT_LONGITUDE = -46.64481884656898;

const MapsScreen = ({ route }) => {
  const { top } = useSafeAreaInsets();

  const initialRegion = useMemo(() => route?.params?.initialRegion, [route]);

  const navigation = useNavigation();
  const handleOpenMarker = (companyId: number) =>
    navigation.navigate('Company', { companyId });

  const latitude = initialRegion?.latitude || DEFAULT_LATITUDE;
  const longitude = initialRegion?.longitude || DEFAULT_LONGITUDE;

  return (
    <View flex={1} paddingTop={top}>
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
        {companies?.map(({ id, latitude, longitude, avatar }) => {
          return (
            <Marker
              key={id}
              coordinate={{
                latitude,
                longitude,
              }}
              onPress={() => handleOpenMarker(id)}>
              <Image
                borderWidth={2}
                borderColor="$gray1"
                source={{ uri: avatar }}
                height={40}
                width={40}
                borderRadius={40}
              />
            </Marker>
          );
        })}
      </MapView>
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
