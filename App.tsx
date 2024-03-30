import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const logo = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={logo} style={{height: 300, width: 300, margin: "10%"}}/>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nec nulla suscipit, varius justo in, varius lacus.
          Fusce congue mollis vestibulum. Aenean nec tincidunt diam, vel gravida leo.
          Curabitur vitae feugiat ante, ac feugiat nisl. Curabitur accumsan,
          orci ac placerat porta, elit quam bibendum nibh, sed tincidunt
          eros erat sit amet augue. Suspendisse vehicula diam at ultrices hendrerit.
          Nullam consectetur dolor eros, in interdum sem cursus a. Vivamus tristique porta semper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nec nulla suscipit, varius justo in, varius lacus.
          Fusce congue mollis vestibulum. Aenean nec tincidunt diam, vel gravida leo.
          Curabitur vitae feugiat ante, ac feugiat nisl. Curabitur accumsan,
          orci ac placerat porta, elit quam bibendum nibh, sed tincidunt
          eros erat sit amet augue. Suspendisse vehicula diam at ultrices hendrerit.
          Nullam consectetur dolor eros, in interdum sem cursus a. Vivamus tristique porta semper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nec nulla suscipit, varius justo in, varius lacus.
          Fusce congue mollis vestibulum. Aenean nec tincidunt diam, vel gravida leo.
          Curabitur vitae feugiat ante, ac feugiat nisl. Curabitur accumsan,
          orci ac placerat porta, elit quam bibendum nibh, sed tincidunt
          eros erat sit amet augue. Suspendisse vehicula diam at ultrices hendrerit.
          Nullam consectetur dolor eros, in interdum sem cursus a. Vivamus tristique porta semper.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nec nulla suscipit, varius justo in, varius lacus.
          Fusce congue mollis vestibulum. Aenean nec tincidunt diam, vel gravida leo.
          Curabitur vitae feugiat ante, ac feugiat nisl. Curabitur accumsan,
          orci ac placerat porta, elit quam bibendum nibh, sed tincidunt
          eros erat sit amet augue. Suspendisse vehicula diam at ultrices hendrerit.
          Nullam consectetur dolor eros, in interdum sem cursus a. Vivamus tristique porta semper.
        </Text>
      <Image source={logo} style={{height: 300, width: 300, margin: "10%"}}/>
      <StatusBar style="auto"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
