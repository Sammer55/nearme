import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./login";

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreens;
