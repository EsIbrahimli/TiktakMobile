import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from '../assets/icons/basket.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIK TAK</Text>
      <Logo width={23} height={26} />
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