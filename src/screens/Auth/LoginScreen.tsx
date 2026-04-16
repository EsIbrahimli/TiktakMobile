import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./Auth.styles";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import { loginUser } from "../../services/authService";
import { useAuthStore } from "../../store/useAuthStore";
 
const normalizeAzPhone = (input: string) => {
  const digits = input.replace(/\D/g, "");

  if (digits.startsWith("994") && digits.length === 12) {
    return `+${digits}`;
  }

  if (digits.startsWith("0") && digits.length === 10) {
    return `+994${digits.slice(1)}`;
  }

  if (digits.length === 9) {
    return `+994${digits}`;
  }

  return input.trim();
};

const isValidAzPhone = (value: string) => /^\+994\d{9}$/.test(value);

const LoginPage = () => {
  const navigation = useNavigation<any>();
  const { setAuth } = useAuthStore();

  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    const normalizedPhone = normalizeAzPhone(phone);

    if (!normalizedPhone || !password.trim()) {
      Alert.alert("Xəta", "Telefon və şifrəni daxil edin");
      return;
    }

    if (!isValidAzPhone(normalizedPhone)) {
      Alert.alert("Xəta", "Telefon nömrəsini düzgün daxil edin. Nümunə: +994501234567");
      return;
    }

    try {
      const res = await loginUser({
        phone: normalizedPhone,
        password: password.trim(),
      });
      setAuth(res.data);
      navigation.replace("Home");
    } catch (err) {
      const error = err as AxiosError<{ message?: string | string[] }>;
      const message = error.response?.data?.message;
      const readableMessage = Array.isArray(message)
        ? message.join("\n")
        : message || "Daxil olma zamanı xəta baş verdi";
      Alert.alert("Xəta", readableMessage);
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