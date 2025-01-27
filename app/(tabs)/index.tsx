import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

const App = () => {
  const onPressHandler = () => {
    alert("Button Pressed");
  };

  return (
    <View style={styles.container}>
     
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        }}
        style={styles.image}
      />
      
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
    backgroundColor: "#FF5722", 
    width: 120, 
    height: 50, 
    borderRadius: 5, 
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  fabText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: "contain", 
  },
});

export default App;
