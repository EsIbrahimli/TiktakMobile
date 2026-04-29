import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from '../assets/icons/basket.svg';
import { useNavigation } from "@react-navigation/native";
import BasketScreen from "../screens/Basket/BasketScreen";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIK TAK</Text>
      <TouchableOpacity  onPress={() => navigation.navigate("Basket")}>
        <Logo width={23} height={26} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.1,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
  },
});

export default Header;