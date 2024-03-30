import React, {useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";

export type ColorTextProps = {
  text: string
}

const ColorText: React.FC<ColorTextProps> = ({text}) => {

  const DEFAULT_COLOR = "#000000";
  const [textColor, setTextColor] = useState(DEFAULT_COLOR)

  const changeColor = () => setTextColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  const resetColor = () => setTextColor(DEFAULT_COLOR);

  return (
    <View>
      <Pressable
        onPress={changeColor}
        onLongPress={resetColor}
      >
        <Text style={[styles.info, {color: textColor}]}>
          {text}
        </Text>
      </Pressable>
      <Button
        title={"Press Me"}
        onPress={changeColor}
        onLongPress={resetColor}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    fontSize: 18,
    textAlign: "center",
    paddingRight: "20%",
    paddingLeft: "20%"
  }

});

export default ColorText;