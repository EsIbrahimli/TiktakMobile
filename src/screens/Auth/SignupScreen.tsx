import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles }  from './Auth.styles';

 const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qeydiyyatdan keç</Text>

      <TextInput placeholder="ad soyad" style={styles.input} />
      <TextInput placeholder="telefon" style={styles.input} />
      <TextInput placeholder="parol" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Qeydiyyat</Text>
      </TouchableOpacity>

      <Text style={styles.link}>
        Hesabınız var? Daxil olun
      </Text>
    </View>
  );
};
export default SignupPage;