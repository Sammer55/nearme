import Input from '@/components/input';
import { useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H5, Image, Stack, Text, XStack, YStack } from 'tamagui';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';

type Props = {
  route?: {
    params?: {
      type: 'user' | 'company';
    };
  };
};

const LoginScreen = ({ route }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const { control } = useForm();
  const navigation = useNavigation();
  const toast = useToast();

  const accountType = route?.params?.type ?? 'user';

  const signIn = () => {
    toast.show("Welcome again! It's good to have you with us.", {
      type: 'success',
    });
    navigation.navigate('AuthenticatedScreens');
  };

  const signUp = () => {
    toast.show('Sorry, registration is still under construction...', {
      type: 'warning',
    });
    // navigation.navigate('SignUp');
  };

  const icon = {
    user: <FontAwesome5 name="user-astronaut" size={18} color="white" />,
    company: <FontAwesome5 name="store-alt" size={18} color="white" />,
  };

  return (
    <Stack
      animation="bouncy"
      enterStyle={{
        scale: 1.5,
        y: -10,
        opacity: 0,
      }}
      paddingTop={top + 16}
      paddingBottom={bottom + 16}
      paddingHorizontal="$3"
      space="$8">
      <Image
        backgroundColor="$blue2Dark"
        borderRadius={120}
        alignSelf="center"
        source={{
          uri: require('assets/icon.png'),
          width: 120,
          height: 120,
        }}
      />

      <YStack space>
        <YStack space="$1">
          <XStack space="$2">
            {icon[accountType]}
            <H5>Welcome again</H5>
          </XStack>
          <Text>Log in to continue exploring.</Text>
        </YStack>

        <YStack space="$2">
          <Input
            control={control}
            placeholder="Username"
            name="username"
            autoCapitalize="none"
          />
          <Input
            control={control}
            borderWidth={1}
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          <Button
            pressStyle={{
              backgroundColor: '$blue9',
              borderColor: '$blue8',
            }}
            backgroundColor="$primary"
            onPress={signIn}>
            Login
          </Button>
        </YStack>
        <Button chromeless onPress={signUp}>
          Don't have an account? <Text fontWeight="bold">Create here</Text>
        </Button>
      </YStack>
    </Stack>
  );
};

export default LoginScreen;
