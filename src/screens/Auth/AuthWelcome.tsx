import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
   


const AuthWelcome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("./welcome.png")}
        style={styles.image}
        
       
      />

      <Text style={styles.text}>
        Sizə daha əlçatan olması üçün qeydiyyatdan keçərək davam edə bilərsiniz 😊
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Qeydiyyat</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        Hesabınız varsa {""} <Text style={styles.linkText}>Daxil olun</Text>
      </Text>

    </View>
  );
};

export default AuthWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,  
    resizeMode: "contain",
    marginBottom: 20,
  },
 
  text: {
    textAlign: "center",
    marginBottom: 30,
    color: "#555",
  },
  button: {
    backgroundColor: "#6CC24A",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignSelf: "stretch",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
 
  link: {
  textAlign: "center",
  marginTop: 15,
  color: "#555",
},

linkText: {
  color: "#6CC24A",
  fontWeight: "600",
},
});