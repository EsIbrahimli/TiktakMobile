import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useProductsStore } from "../../../store/useProductStore";
import { styles } from "../Products/Products.styles";

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();

  const { id } = route.params;

  const {
    selectedProduct,
    fetchProductById,
    loading,
  } = useProductsStore();

  const [quantity, setQuantity] = React.useState(0);

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} size="large" />;
  }

  if (!selectedProduct) {
    return <Text style={{ padding: 20 }}>Məhsul tapılmadı</Text>;
  }

  const productName =
    selectedProduct.title || selectedProduct.name;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Geri qayıt</Text>
        </TouchableOpacity>

        
        <Image
          source={{ uri: selectedProduct.img_url }}
          style={styles.image}
        />

        
        <Text style={styles.title}>{productName}</Text>

        <Text style={styles.desc}>
          {selectedProduct.description ||
            "Təzə və keyfiyyətli məhsul gündəlik istifadəniz üçün idealdır."}
        </Text>

        <Text style={styles.price}>
          {selectedProduct.price} ₼
        </Text>

        
        {quantity > 0 ? (
          <View style={styles.qtyBox}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQuantity(quantity - 1)}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>
              {quantity} kq
            </Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => setQuantity(1)}
          >
            <Text style={styles.addText}>
              Səbətə əlavə et
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}