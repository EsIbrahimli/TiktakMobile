import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthWelcome from "../screens/Auth/AuthWelcome";
import LoginPage from "../screens/Auth/LoginScreen";
import SignupPage from "../screens/Auth/SignupScreen";



const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (    
     
<Stack.Navigator initialRouteName="AuthWelcome">
  <Stack.Screen name="AuthWelcome" component={AuthWelcome} />
  <Stack.Screen name="Login" component={LoginPage} />
  <Stack.Screen name="Signup" component={SignupPage} />
</Stack.Navigator>

    );
}