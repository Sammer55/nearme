import { H6, Image, Stack, Text, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AccountType from './accountType';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleNavigate = (type: 'company' | 'user') =>
    navigation.navigate('Login', { type });

  return (
    <LinearGradient
      flex={1}
      paddingTop={top + 16}
      colors={['black', '$blue2Dark']}
      start={[1, 1]}
      end={[0, 0.2]}
      paddingHorizontal="$3"
      position="relative">
      <YStack
        justifyContent="space-between"
        flex={1}
        paddingBottom={bottom + 16}
        width="100%"
        zIndex={1}>
        <YStack space="$3" alignItems="center">
          <H6 maxWidth="70%" fontSize="$8" textAlign="center">
            Hello! Choose your Account Type
          </H6>

          <Text maxWidth="70%" textAlign="center">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum
          </Text>
        </YStack>
        <Stack>
          <Image
            backgroundColor="$blue2Dark"
            borderRadius={200}
            alignSelf="center"
            source={{
              uri: 'https://placekitten.com/200/300',
              width: 200,
              height: 200,
            }}
          />
        </Stack>

        <YStack width="100%" space="$3">
          <AccountType
            onPress={() => handleNavigate('company')}
            icon={<FontAwesome5 name="store-alt" size={18} color="white" />}
            title="Company"
            description="Lorem ipsum Lorem ipsum"
          />
          <AccountType
            onPress={() => handleNavigate('user')}
            icon={
              <FontAwesome5 name="user-astronaut" size={20} color="white" />
            }
            title="User"
            description="Lorem ipsum Lorem ipsum"
          />
        </YStack>
      </YStack>
    </LinearGradient>
  );
};

export default WelcomeScreen;
