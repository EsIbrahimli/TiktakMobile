import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./Auth.styles";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
  if (!phone || !password) {
    alert("Zəhmət olmasa bütün xanaları doldurun");
    return;
  }

  console.log("login:", phone, password);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daxil ol</Text>

      <TextInput placeholder="telefon" style={styles.input} value={phone} onChangeText={setPhone} />
      <TextInput placeholder="parol" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Daxil ol</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız yoxdur? {""}
         <Text
    style={styles.linkText}
    onPress={() => navigation.navigate("Signup")}
  >
    Qeydiyyatdan keç
  </Text>
      </Text>
    </View>
  );
};

export default LoginPage;