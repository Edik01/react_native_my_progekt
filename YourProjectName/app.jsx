import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello react native</Text>
    </View>
  );
};

const styles = StyleSheet({
  container: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
  },
});

export default App;
