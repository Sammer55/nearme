import { CompanyType } from '@/types/companies';
import RenderTag from '@/utils/renderTag';
import { Card, H6, Image, Stack, Text, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import haversineDistance from '@/utils/haversineDistance';
import { useLocation } from '@/context/location';

type Props = {
  item: CompanyType;
};

const Company = ({ item }: Props) => {
  const navigation = useNavigation();

  const handleNavigateToCompany = () =>
    navigation.navigate('Company', { companyId: item?.id });

  const { location } = useLocation();

  const distance = !!location
    ? haversineDistance({
        userLatitude: location?.coords?.latitude,
        userLongitude: location?.coords?.longitude,
        destinyLatitude: item?.latitude,
        destinyLongitude: item?.longitude,
      })
    : '0';

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
      <LinearGradient
        padding="$2"
        colors={['black', '$background']}
        start={[2, 1]}
        end={[0, 1]}>
        <XStack space="$3">
          <Image
            source={{ uri: item.avatar }}
            width={80}
            height={80}
            borderRadius="$3"
            backgroundColor="$backgroundFocus"
          />
          <YStack space="$2" flex={1}>
            <YStack>
              <XStack justifyContent="space-between">
                <H6>{item?.name}</H6>
                <XStack space="$2" alignItems="center">
                  <FontAwesome name="star" size={16} color="yellow" />
                  <H6>{item?.rate}</H6>
                </XStack>
              </XStack>
              <XStack space="$2">
                <FontAwesome name="map-marker" size={14} color="white" />
                <Text fontSize="$2">{item?.address}</Text>
              </XStack>
            </YStack>
            <XStack justifyContent="space-between">
              {item?.tags?.map((item) => <RenderTag size="$2" tag={item} />)}
              <Stack
                backgroundColor="$background"
                borderRadius="$1"
                paddingHorizontal="$2"
                alignItems="center"
                justifyContent="center">
                <Text>{distance}</Text>
              </Stack>
            </XStack>
          </YStack>
        </XStack>
      </LinearGradient>
    </Card>
  );
};

export default Company;
