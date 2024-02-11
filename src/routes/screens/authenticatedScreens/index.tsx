import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './feed';
import { useTheme } from 'tamagui';
import CustomTabBar from './customTabBar';
import ListScreen from './list';
import EventsScreen from './events';

const Tab = createBottomTabNavigator();

const AuthenticatedScreens = () => {
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
      <Tab.Screen name="Profile" component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticatedScreens;
