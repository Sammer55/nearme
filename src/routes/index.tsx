import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreens from './screens/authScreens';
import AuthenticatedScreens from './screens/authenticatedScreens';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthenticatedScreens"
        screenOptions={{
          headerShown: false,
        }}>
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
