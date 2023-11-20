import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'tamagui';
import LoginScreen from './login';
import WelcomeScreen from './welcome';

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.backgroundPress.get(),
        },
        animation: 'fade',
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreens;
