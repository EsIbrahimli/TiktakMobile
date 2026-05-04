import React, { useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./Auth.styles";
import { useNavigation } from "@react-navigation/native";

import { useAuthStore } from "../../store/useAuthStore";







const LoginPage = () => {
  const navigation = useNavigation<any>();
  const { login } = useAuthStore(); 

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const normalizePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (digits.startsWith("994") && digits.length === 12) {
      return "+" + digits;
    }

    if (digits.length === 9) {
      return "+994" + digits;
    }

    if (digits.startsWith("0") && digits.length === 10) {
      return "+994" + digits.slice(1);
    }

    return "";
  };

  const handleLogin = async () => {
  const normalizedPhone = normalizePhone(phone);

  if (!normalizedPhone || !password) {
    Alert.alert("Xəta", "Telefon və parol vacibdir");
    return;
  }

  try {
    await login({
      phone: normalizedPhone,
      password,
    });

    Alert.alert("Uğurlu", "Daxil olundu");
    navigation.replace("Home");

  } catch (err: any) {
    console.log("ERROR:", err?.response?.data);

    const message =
      Array.isArray(err?.response?.data?.message)
        ? err.response.data.message[0]
        : err?.response?.data?.message ||
          "Login uğursuz oldu";

    Alert.alert("Xəta", message);
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daxil ol</Text>

      <TextInput
        placeholder="Telefon"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Parol"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Daxil ol</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız yoxdur?{" "}
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