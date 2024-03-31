import React from "react";
import {StyleSheet, Text, View} from "react-native";

export type StylishProps = {
  color: string
  text: string
}

const Stylish: React.FC<StylishProps> = ({color, text}) => {

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "black",
    padding: 60
  },
  text:{
    backgroundColor:"white",
    padding: "15%",
    // margin: "30%"
  }

});

export default Stylish;

