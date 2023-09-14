import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 30,
  },
});
