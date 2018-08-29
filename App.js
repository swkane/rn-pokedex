import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokeList from "./components/PokeList";
import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";

export default class App extends React.Component {
  state = {
    landingScreen: true
  };

  handlePress = () => {
    this.setState({ landingScreen: !this.state.landingScreen });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.state.landingScreen ? (
          <LandingScreen handlePress={this.handlePress} />
        ) : (
          <PokeList />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1
  }
});
