import React from "react";
import { Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function Logo() {
  return (
    <MaterialIcons
      name="shopping-bag"
      size={100}
      color="green"
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
