import React from "react";
import {StyleSheet, Text, View} from "react-native";

export type StylishProps = {
  color: string
}

const Stylish: React.FC<StylishProps> = ({color}) => {

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      {/*<Text>I am stylish!</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: "black",
    padding: 60
  }

});

export default Stylish;

