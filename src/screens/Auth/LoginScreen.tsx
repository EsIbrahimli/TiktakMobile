import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./Auth.styles";
import { useNavigation } from "@react-navigation/native";
import apiClient from "../../services/instance";
import { loginUser, registerUser } from "../../services/authService";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react"; 





const LoginPage = () => {
  const navigation = useNavigation();
  const { setAuth } = useAuthStore();

  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    const res = await loginUser({ phone, password });
 if (phone === "+994105554422" && password === "1234") {
    setAuth(res.data);
    navigation.replace("Home");
  } else {
    alert("Telefon və ya şifrə yanlışdır");
  }
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