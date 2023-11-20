import { H3, YStack, Text, XStack } from 'tamagui';
import { FontAwesome } from '@expo/vector-icons';

const EmptyState = () => {
  return (
    <YStack
      enterStyle={{
        scale: 1.1,
        x: 100,
        opacity: 0,
      }}
      pressStyle={{ rotate: '3deg' }}
      animation="lazy"
      alignItems="center"
      padding="$5"
      space="$2.5">
      <XStack alignItems="flex-end" space="$3">
        <FontAwesome name="search" size={24} color="white" />
        <H3>Ops...</H3>
      </XStack>
      <Text>Sorry, we didn't find anything here :(</Text>
    </YStack>
  );
};

export default EmptyState;
