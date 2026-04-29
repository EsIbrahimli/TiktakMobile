import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Home from '../assets/icons/home.svg';
import Search from '../assets/icons/search.svg';
import Profile from '../assets/icons/profile.svg';
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import AccountScreen from "../screens/Account/AccountScreen";


const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("Home")}>
        <Home width={22} height={22} />
        <Text style={styles.text}>Əsas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.search} onPress={() => navigation.navigate("Search")}>
        <Search width={22} height={22} />
        <Text style={styles.text}>Axtar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Account")}>
        <Profile width={22} height={22} />
        <Text style={styles.text}>Hesabım</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    color: "#8E8E93",
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
    color: "#8E8E93",
    gap: 4,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 12,
    color: "#8E8E93",
  },
});

export default Footer;