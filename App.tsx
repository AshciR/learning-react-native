import {Button, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import ColorText from "./components/ColorText";
import CustomAlert from "./components/CustomAlert";
import Stylish from "./components/Stylish";

const logo = require("./assets/adaptive-icon.png")

export default function App() {

  const displayText = `
  Hi, I change colors when my button is pressed! 
  
  Press me for a long time to set me back to black.
  `

  return (
    <>
      <Stylish color={"red"} text={"Red Box"}/>
      <Stylish color={"yellow"} text={"Yellow Box"}/>
      <Stylish color={"green"} text={"Green Box"}/>
    </>
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
