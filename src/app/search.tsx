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
      <FlatList
        data={[]}
        renderItem={({ item }) => <FoodListItem />}
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
