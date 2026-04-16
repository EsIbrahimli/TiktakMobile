import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import { registerUser } from "../../services/authService";
import React, { useState } from "react";

import { styles }  from './Auth.styles';

 const SignupPage = () => {

  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name.trim() || !phone.trim() || !password.trim()) {
      Alert.alert("Xəta", "Bütün məlumatları doldurun");
      return;
    }

    try {
      await registerUser({
        full_name: name.trim(),
        phone: phone.trim(),
        password: password.trim(),
      });
      Alert.alert("Uğurlu", "Qeydiyyat uğurlu oldu! İndi daxil ola bilərsiniz.");
      navigation.navigate("Login");
    } catch (err) {
      const error = err as AxiosError<{ message?: string | string[] }>;
      const message = error.response?.data?.message;
      const readableMessage = Array.isArray(message)
        ? message.join("\n")
        : message || "Qeydiyyat zamanı xəta baş verdi";
      Alert.alert("Xəta", readableMessage);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qeydiyyatdan keç</Text>

      <TextInput placeholder="ad soyad" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="telefon" style={styles.input} value={phone} onChangeText={setPhone} />
      <TextInput placeholder="parol" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Qeydiyyat</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız var? {""} <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>Daxil olun</Text>
      </Text>
    </View>
  );
};
export default SignupPage;