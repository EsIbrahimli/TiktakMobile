import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Account.styles";
import { useUserStore } from "../../store/accountStore";
import { useEffect } from "react";


export default function AccountHomeScreen({ navigation }) {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hesabım</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("AccountInfo")}
      >
        <Text style={styles.text}>Hesab məlumatları</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.text}>Sifarişlərim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.text}>Siyahılarım</Text>
      </TouchableOpacity>
    </View>
  );
}