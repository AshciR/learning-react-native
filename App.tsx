import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

const logo = require("./assets/adaptive-icon.png")

export default function App() {

  const [color, setColor] = useState("black");

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setColor(color === "black" ? "midnightblue" : "black")}
        onLongPress={() => setColor("red")}
      >
        <Image source={logo} style={{height: 100, width: 100}}/>
        <Text style={{color: `${color}`, paddingLeft: "20%", paddingRight: "20%"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nec nulla suscipit, varius justo in, varius lacus.
        </Text>
      </Pressable>
      <Button
        title={"Press Me"}
        onPress={() => console.log("Button Pressed.")}
        color={"green"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
