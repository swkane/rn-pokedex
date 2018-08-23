import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokeList from "./components/PokeList";
import Header from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PokeList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8"
  }
});
