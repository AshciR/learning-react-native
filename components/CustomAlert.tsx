import React from "react";
import {Alert, Button, View} from "react-native";

export type AlertProps = {

}

const CustomAlert: React.FC<AlertProps> = () =>{
  return (
    <View>
      <Button title={"Press Me"} onPress={() => Alert.alert("I am an alert!", "I was pressed, so huzzah!")}/>
    </View>
  );
}

export default CustomAlert;

