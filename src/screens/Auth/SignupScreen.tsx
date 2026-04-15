import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { loginUser, registerUser } from "../../services/authService";
import { useAuthStore } from "../../store/useAuthStore";
import React, { useState } from "react";

import { styles }  from './Auth.styles';

 const SignupPage = () => {

  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
  if (!name || !phone || !password) {
    alert("Bütün məlumatları doldurun");
    return;
  }
   try {
      await registerUser({ name, phone, password });
      alert("Qeydiyyat uğurlu oldu! İndi daxil ola bilərsiniz.");
      navigation.navigate("Login");
    } catch (error) {
      alert("Qeydiyyat zamanı xəta baş verdi. Yenidən cəhd edin.");
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