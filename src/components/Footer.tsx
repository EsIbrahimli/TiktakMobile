import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Home from '../assets/icons/home.svg';
import Search from '../assets/icons/search.svg';
import Profile from '../assets/icons/profile.svg';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Home width={22} height={22} />
        <Text style={styles.text}>Əsas</Text>
      </View>
       <View style={styles.search}>
        <Search width={22} height={22} />
        <Text style={styles.text}>Axtar</Text>
      </View>
       <View style={styles.profile}>
        <Profile width={22} height={22} />
        <Text style={styles.text}>Hesabım</Text>
      </View>
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