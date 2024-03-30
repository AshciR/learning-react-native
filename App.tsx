import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

const logo = require("./assets/adaptive-icon.png")

export default function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={"Open Modal"}
        onPress={() => {
          console.log("Button Pressed.")
          setModalVisible(true)
        }}
        color={"green"}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modal}>
          <Text>Modal content</Text>
          <Button
            title={"Close"}
            color={"white"}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
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
  modal: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
  }
});
