import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles }  from './Auth.styles';

 const SignupPage = () => {
  const handleSignup = () => {
  if (!name || !phone || !password) {
    alert("Bütün məlumatları doldurun");
    return;
  }

  console.log("signup:", name, phone, password);
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
        Hesabınız var? {""} <Text style={styles.linkText}>Daxil olun</Text>
      </Text>
    </View>
  );
};
export default SignupPage;