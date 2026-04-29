import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useBasketStore } from "../../store/useBasketStore";
import { styles } from "../Basket/Basket.styles";

const BasketScreen = () => {
  const navigation = useNavigation();

  const {
    items,
    fetchBasket,
    addItem,
    removeItem,
    clearAll,
  } = useBasketStore();

  useEffect(() => {
    fetchBasket();
  }, []);

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + Number(item.total_price || 0), 0);
  };

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>✖</Text>
        <Text>Səbətdə məhsul yoxdur</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Səbətim</Text>

        <TouchableOpacity onPress={clearAll}>
          <Text style={styles.clearBtn}>Səbəti təmizlə</Text>
        </TouchableOpacity>
      </View>

      {/* ITEMS */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.product_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Image source={{ uri: item.img_url }} style={styles.image} />

              <View>
                <Text style={styles.name}>
                  {item.name} {item.quantity} kg
                </Text>

                <Text style={styles.price}>
                  {Number(item.total_price).toFixed(2)} ₼
                </Text>
              </View>
            </View>

            <View style={styles.quantityBox}>
              <TouchableOpacity onPress={() => removeItem(item.product_id)}>
                <Text style={styles.qtyBtn}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>{item.quantity}</Text>

              <TouchableOpacity onPress={() => addItem(item.product_id)}>
                <Text style={styles.qtyBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* TOTAL */}
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>
          Ümumi: {calculateTotal().toFixed(2)} ₼
        </Text>

        <Text style={styles.totalText}>Çatdırılma: Pulsuz</Text>

        <Text style={styles.finalTotal}>
          Yekun: {calculateTotal().toFixed(2)} ₼
        </Text>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Sifarişi tamamla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;