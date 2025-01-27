
import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const App = () => {
  const onPressHandler = () =>{
    alert("Button Pressed");
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}>BUTTON</Text> */}
      <View style={styles.btnContainer}>
      <Button
        title="click"
        onPress= {onPressHandler}
      />
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
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
















