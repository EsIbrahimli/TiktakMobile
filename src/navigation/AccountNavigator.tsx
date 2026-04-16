import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountInfoScreen from "../screens/Account/AccountInfo/AccountInfoScreen";
import OrderHistoryScreen from "../screens/Account/OrderHistory/OrderHistoryScreen";
import FavoritesScreen from "../screens/Account/Favorites/FavoritesScreen";
import AccountHomeScreen from "../screens/Account/AccountScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountHome" component={AccountHomeScreen} />
      <Stack.Screen name="AccountInfo" component={AccountInfoScreen} />
      <Stack.Screen name="Orders" component={OrderHistoryScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}