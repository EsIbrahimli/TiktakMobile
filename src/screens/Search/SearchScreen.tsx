import {
  View,
  TextInput,
  FlatList,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from "react-native";
import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect } from "react";
import { useSearchStore } from "../../store/useSearchStore";

const SearchScreen = () => {
 

   const { query, results, setQuery, searchProducts, loading } =
    useSearchStore();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!query) {
        return;
      }
      searchProducts(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, padding: 16 }}>
        
        <TextInput
          placeholder="Məhsul axtar..."
          value={query}
          onChangeText={setQuery}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 10
          }}
        />
        {loading && <ActivityIndicator size="small" />}

        <FlatList
          data={results}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <Text style={{ padding: 10 }}>
              {item.name}
            </Text>
          )}
        />
        {!loading && results.length === 0 && query.length > 0 && (
  <Text>Heç bir nəticə tapılmadı</Text>
)}
        

      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;