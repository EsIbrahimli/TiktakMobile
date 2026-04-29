import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Account.styles";
import { useUserStore } from "../../store/accountStore";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native"; 
import OrderHistoryScreen from "./OrderHistory/OrderHistoryScreen";
import AccountInfoScreen from "./AccountInfo/AccountInfoScreen";
import FavoritesScreen from "./Favorites/FavoritesScreen";


export default function AccountHomeScreen({ navigation }) {
 
  const { user, getUser } = useUserStore();


  
  

  return (
     <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Sərhan Rəhimov</Text>
      </View>

      {/* MENU */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("AccountInfoScreen")}
      >
        <Text style={styles.text}>Hesab məlumatları</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("OrderHistoryScreen")}
      >
        <Text style={styles.text}>Sifarişlərim</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("FavoritesScreen")}
      >
        <Text style={styles.text}>Siyahılarım</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Çıxış</Text>
      </TouchableOpacity>

    </View>
  );
}
