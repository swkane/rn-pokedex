import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default (LandingScreen = ({ handlePress }) => {
  const { containerStyle, titleStyle, buttonStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Welcome to the Wonderful World of Pokemon!</Text>
      <Button style={buttonStyle} title="Explore" onPress={handlePress} />
    </View>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    margin: 20
  },
  buttonStyle: {
    margin: 50
  }
});
