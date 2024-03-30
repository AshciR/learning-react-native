import {Button, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import ColorText from "./components/ColorText";

const logo = require("./assets/adaptive-icon.png")

export default function App() {

  const displayText = `
  Hi, I change colors when my button is pressed! 
  
  Press me for a long time to set me back to black.
  `

  return (
    <View style={styles.container}>
      <ColorText text={displayText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
