import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { loginApi, registerApi } from "../../services/authService";
import { useAuthStore } from "../../store/useAuthStore";
import React, { useState } from "react";
import LoginPage from "./LoginScreen";
import AuthNavigator from '../../navigation/AuthNavigator';

import { styles }  from './Auth.styles';

 const SignupPage = () => {
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
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

  const handleSignup = async () => {
    const normalizedPhone = normalizePhone(phone);

    if (!name || !normalizedPhone || !password) {
      alert("Bütün məlumatları doldurun");
      return;
    }

    try {
      const res = await registerApi(name, normalizedPhone, password);

      console.log("SIGNUP RESPONSE:", res.data);

      alert("Qeydiyyat uğurlu oldu!");
      navigation.navigate("Login");

    } catch (err: any) {
      console.log("SIGNUP ERROR:", err?.response?.data);

      const message =
        Array.isArray(err?.response?.data?.message)
          ? err.response.data.message[0]
          : err?.response?.data?.message ||
            "Qeydiyyat zamanı xəta baş verdi";

      alert(message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qeydiyyatdan keç</Text>

      <TextInput
        placeholder="ad soyad"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="telefon"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="parol"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Qeydiyyat</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız var?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Daxil olun
        </Text>
      </Text>
    </View>
  );
};

export default SignupPage;