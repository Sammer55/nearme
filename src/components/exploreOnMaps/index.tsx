import { H6, XStack, Text, YStack, Stack } from 'tamagui';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'tamagui/linear-gradient';
import { useNavigation } from '@react-navigation/native';

type Props = {
  description?: string;
};

const ExploreOnMaps = ({
  description = 'Find something on your region',
}: Props) => {
  const navigation = useNavigation();

  const handleGoToMaps = () => navigation.navigate('Maps');

  return (
    <Stack
      onPress={handleGoToMaps}
      scale={1}
      animation="bouncy"
      pressStyle={{ opacity: 0.8, y: -1, scale: 0.99 }}
      enterStyle={{ opacity: 0, x: -100, scale: 0.1 }}>
      <LinearGradient
        padding="$2"
        borderRadius="$3"
        colors={['$green10', 'black']}
        start={[0.5, 0.3]}
        end={[0, 1]}>
        <XStack space="$3">
          <Stack
            width={40}
            height={40}
            alignItems="center"
            justifyContent="center"
            borderRadius="$3"
            backgroundColor="#ffffff90">
            <FontAwesome5 name="location-arrow" size={24} color="white" />
          </Stack>
          <YStack>
            <H6>Explore on maps</H6>
            <Text fontSize="$3">{description}</Text>
          </YStack>
        </XStack>
      </LinearGradient>
    </Stack>
  );
};

export default ExploreOnMaps;
