import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./Auth.styles";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daxil ol</Text>

      <TextInput placeholder="telefon" style={styles.input} />
      <TextInput placeholder="parol" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Daxil ol</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız yoxdur? Qeydiyyatdan keç
      </Text>
    </View>
  );
};

export default LoginPage;