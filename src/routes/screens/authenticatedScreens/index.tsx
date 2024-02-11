import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './login';

const Tab = createBottomTabNavigator();

const AuthenticatedScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticatedScreens;
