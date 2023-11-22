import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './tabs/feed';
import { useTheme } from 'tamagui';
import CustomTabBar from './tabs/customTabBar';
import ListScreen from './tabs/list';
import EventsScreen from './tabs/events';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompanyScreen from './screens/company';
import PostScreen from './screens/post';
import MapsScreen from './screens/maps';
import EventScreen from './screens/event';
import AlertsScreen from './screens/alerts';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabsScreens = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          backgroundColor: theme.backgroundFocus.get(),
        },
      }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
    </Tab.Navigator>
  );
};

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabs" component={TabsScreens} />
      <Stack.Screen name="Company" component={CompanyScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Maps" component={MapsScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
      <Stack.Screen name="Alerts" component={AlertsScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedScreens;
