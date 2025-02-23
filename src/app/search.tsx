import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const performSearch = () => {
    console.warn("Search", search);
    setSearch("");
  };

  const foodItems = [
    { label: "Pizza", cal: 175, brand: "Dominos" },
    { label: "Burger", cal: 115, brand: "McDonalds" },
    { label: "Bowl", cal: 105, brand: "Chopotle" },
    { label: "Coffee", cal: 55, brand: "Starbucks" },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          style={styles.input}
        />
        <Ionicons
          onPress={() => {}}
          name="barcode-outline"
          size={32}
          color="dimgray"
        />
        {search && (
          <Ionicons
            onPress={performSearch}
            name="search"
            size={30}
            color="royalblue"
          />
        )}
      </View>

      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text>Search a food</Text>}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
});
