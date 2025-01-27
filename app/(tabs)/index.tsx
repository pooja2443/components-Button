import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

const App = () => {
  const onPressHandler = () => {
    alert("Button Pressed");
  };

  return (
    <View style={styles.container}>
      {/* Image outside of the button */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        }}
        style={styles.image}
      />
      
      {/* Touchable Button */}
      <TouchableOpacity style={styles.fab} onPress={onPressHandler}>
        <Text style={styles.fabText}>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    backgroundColor: "#FF5722", // Orange color for the FAB
    width: 120, // Width of the button
    height: 50, // Height of the button
    borderRadius: 5, // Rounded corners for the button
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Space between the button and image
    shadowColor: "#000", // Shadow effect for the button
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  fabText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    width: 100, // Image size
    height: 100, // Image size
    resizeMode: "contain", // Ensures the image fits properly
  },
});

export default App;
