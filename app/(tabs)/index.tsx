
import React from "react";
import { Text, StyleSheet, View, Button, Touchable, TouchableOpacity } from "react-native";

const App = () => {
  const onPressHandler = () =>{
    alert("Button Pressed");
  }

  return (
    <View style={styles.fab}>
      <TouchableOpacity onPress={onPressHandler}>
    
        <Text style={styles.fabText}>Like</Text>
      </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#FF5722",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  fabText: {
    color: "white",
    fontSize: 24,
  },  
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },  
  textStyle: {
    marginBottom: 20,
    textAlign: "center",
    color: "red",
    fontSize: 30
  },
  btnContainer: {
    borderRadius :5,
    overflow: "hidden"
  }
})

export default App;
















