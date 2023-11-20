import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { H2, H3, Stack, Text, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import Tags from './tags';

const FeedScreen = () => {
  const { top } = useSafeAreaInsets();

  const onSelectTag = () => {};

  return (
    <LinearGradient
      flex={1}
      pt={top + 16}
      colors={['black', '$blue4Dark']}
      start={[1, 1]}
      end={[0, 0.2]}
      position="relative">
      <YStack space="$3">
        <YStack paddingHorizontal="$3" space="$1">
          <H3>Explore</H3>
          <Text fontSize="$5">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{' '}
            <Text fontWeight="bold">Lorem ipsum</Text>.
          </Text>
        </YStack>
        <Tags onSelectTag={onSelectTag} />
      </YStack>
    </LinearGradient>
  );
};

export default FeedScreen;
