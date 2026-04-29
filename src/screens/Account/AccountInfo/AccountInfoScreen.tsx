import { View, Text, TextInput, Button } from "react-native";
import { useEffect, useState } from "react";

import { useUserStore } from "../../../store/accountStore";

export default function AccountScreen() {
  const { user, getUser, updateUser } = useUserStore();

const [form, setForm] = useState({
  full_name: "",
  phone: "",
  address: "",
  email: "",
});

  useEffect(() => {
    getUser();
  }, []);

 useEffect(() => {
  if (user) {
    setForm({
      full_name: user.full_name || "",
      phone: user.phone || "",
      address: user.address || "",
      email: user.email || "", // email məlumatı olmadığı üçün boş saxlanır
    });
  }
}, [user]);
  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

 const handleSubmit = () => {
  updateUser({
    full_name: form.full_name,
    phone: form.phone,
    address: form.address,
  });
};
  return (
    <View style={{ padding: 20 }}>
      <Text>Ad</Text>
      <TextInput
        value={form.full_name}
        onChangeText={(val) => handleChange("full_name", val)}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Email</Text>
      <TextInput
        value={form.email}
        onChangeText={(val) => handleChange("email", val)}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Text>Telefon</Text>
      <TextInput
        value={form.phone}
        onChangeText={(val) => handleChange("phone", val)}
        style={{ borderWidth: 1, marginBottom: 20 }}
      />

      <Button title="Yadda saxla" onPress={handleSubmit} />
    </View>
  );
}