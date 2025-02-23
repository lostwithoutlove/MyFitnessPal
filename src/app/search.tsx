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

export default function SearchScreen() {
  //const items = [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput
          value=""
          onChangeText={() => {}}
          placeholder="Search..."
          style={styles.input}
        />
        <Ionicons
          onPress={() => {}}
          name="barcode-outline"
          size={32}
          color="dimgray"
        />
      </View>
      <FoodListItem item={{ label: "Pizza", cal: 175, brand: "Dominos" }} />
      <FoodListItem item={{ label: "Burger", cal: 115, brand: "McDonalds" }} />
      <FoodListItem item={{ label: "Bowl", cal: 105, brand: "Chopotle" }} />
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
