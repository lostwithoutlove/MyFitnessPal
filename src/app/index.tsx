import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Link } from "expo-router";
import React from "react";
import FoodLogListItem from "../components/FoodLogListItem";

const foodItems = [
  { label: "Pizza", cal: 175, brand: "Dominos" },
  { label: "Burger", cal: 115, brand: "McDonalds" },
  { label: "Bowl", cal: 105, brand: "Chopotle" },
  { label: "Coffee", cal: 55, brand: "Starbucks" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Calories</Text>
        <Text> 1770 - 360 = 1692</Text>
      </View>
      <View style={styles.headerRow}>
        <Text style={styles.subtitle}>Today's food</Text>
        <Link href="/search" asChild>
          <Button title="ADD FOOD" />
        </Link>
      </View>
      <FlatList
        data={foodItems}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    color: "dimgray",
  },
});
