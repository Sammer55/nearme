import { H1, H2, H3, H6, Image, Stack, Text, YStack } from 'tamagui';
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
      position="relative">
      <YStack
        paddingHorizontal="$3"
        justifyContent="space-between"
        flex={1}
        paddingBottom={bottom + 16}
        width="100%"
        zIndex={1}>
        <YStack space="$3" alignItems="center">
          <H6 maxWidth="70%" fontSize="$8" textAlign="center">
            Hello! Choose your Account Type
          </H6>
        </YStack>
        <Stack
          alignItems="center"
          space
          pressStyle={{ rotate: '360deg', scale: 1.2 }}
          enterStyle={{ opacity: 0.5, scale: 0.1, y: 10, x: 10 }}
          animation="bouncy">
          <Image
            backgroundColor="$blue2Dark"
            borderRadius={200}
            alignSelf="center"
            source={{
              uri: require('assets/icon.png'),
              width: 200,
              height: 200,
            }}
          />
          <H3 color="$primary">Nearme</H3>
        </Stack>

        <YStack width="100%" space="$3">
          <AccountType
            onPress={() => handleNavigate('company')}
            icon={<FontAwesome5 name="store-alt" size={18} color="white" />}
            title="Company"
            description="Draw attention to your company"
          />
          <AccountType
            onPress={() => handleNavigate('user')}
            icon={
              <FontAwesome5 name="user-astronaut" size={20} color="white" />
            }
            title="User"
            description="Get to know the area around where you live"
          />
        </YStack>
      </YStack>
    </LinearGradient>
  );
};

export default WelcomeScreen;
