import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreens from './screens/authScreens';
import AuthenticatedScreens from './screens/authenticatedScreens';
import LoaderScreen from './screens/loader';
import { useTheme } from 'tamagui';

const Stack = createNativeStackNavigator();

const Root = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.backgroundPress.get(),
          },
        }}>
        <Stack.Screen name="Loader" component={LoaderScreen} />
        <Stack.Screen name="AuthScreens" component={AuthScreens} />
        <Stack.Screen
          name="AuthenticatedScreens"
          component={AuthenticatedScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
