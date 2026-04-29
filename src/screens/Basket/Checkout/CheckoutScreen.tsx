import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useCheckoutStore } from "../../../store/useCheckoutStore";
import { createCheckoutOrder } from "../../../services/checkoutService";
import { styles } from "../Checkout/Checkout.styles";
import ConfirmModal from "../Checkout/CheckoutModal";


type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CheckoutState = {
  items: CartItem[];
  clearCart: () => void;
};

const CheckoutScreen = () => {

  const items = useCheckoutStore((s: CheckoutState) => s.items);
  const clearCart = useCheckoutStore((s: CheckoutState) => s.clearCart);

  const [payment, setPayment] = useState<"cash" | "card">("cash");
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const total = items.reduce(
    (sum: number, item: CartItem) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  const handleOrder = async () => {
    const orderData = {
      total: total.toFixed(2),
      deliveryFee: "0.00",
      paymentMethod: payment.toUpperCase(),
      note,
      address,
      phone,
      items: items.map((item: CartItem) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      setLoading(true);
      await createCheckoutOrder(orderData);
      clearCart();
      Alert.alert("Uğurlu", "Sifariş tamamlandı");
    } catch {
      Alert.alert("Xəta", "Sifariş alınmadı");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sifarişi tamamla</Text>

     
      <TextInput
        placeholder="Ünvan"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TextInput
        placeholder="Telefon"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Qeyd"
        value={note}
        onChangeText={setNote}
        style={styles.textarea}
        multiline
      />

     
      <TouchableOpacity
        style={[styles.option, payment === "cash" && styles.active]}
        onPress={() => setPayment("cash")}
      >
        <Text>Qapıda nəğd ödəmə</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, payment === "card" && styles.active]}
        onPress={() => setPayment("card")}
      >
        <Text>Qapıda kart ilə ödəmə</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.buttonText}>
          {loading ? "Yüklənir..." : "Sifarişi tamamla"}
        </Text>
      </TouchableOpacity>

     
      <ConfirmModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={async () => {
          setShowModal(false);

          if (!address || !phone) {
            Alert.alert("Xəta", "Ünvan və nömrə daxil edin");
            return;
          }

          if (items.length === 0) {
            Alert.alert("Xəta", "Səbət boşdur");
            return;
          }

          await handleOrder();
        }}
      />

    
      <View style={styles.summary}>
        <FlatList<CartItem>
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>
                {item.quantity} x {item.title}
              </Text>
              <Text>
                {(item.price * item.quantity).toFixed(2)} ₼
              </Text>
            </View>
          )}
        />

        <View style={styles.row}>
          <Text>Ümumi</Text>
          <Text>{total.toFixed(2)} ₼</Text>
        </View>

        <View style={styles.row}>
          <Text>Çatdırılma</Text>
          <Text>Pulsuz</Text>
        </View>

        <View style={[styles.row, styles.total]}>
          <Text>Yekun</Text>
          <Text>{total.toFixed(2)} ₼</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;