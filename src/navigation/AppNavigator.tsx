import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import AuthNavigator from "./AuthNavigator";
import AccountNavigator from "./AccountNavigator";
import SearchScreen from "../screens/Search/SearchScreen";
import AccountHomeScreen from "../screens/Account/AccountScreen";
import BasketScreen from "../screens/Basket/BasketScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // Çünki öz Header-i istifadə edirik
      >
         <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Account" component={AccountNavigator} />
         <Stack.Screen name="SearchScreen" component={SearchScreen} />
         <Stack.Screen name="Basket" component={BasketScreen}/>
        
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;