import React from "react";
import { StyleSheet, View } from "react-native";
import PokeList from "./components/PokeList";
import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";

export default class App extends React.Component {
  state = {
    landingScreen: true
  };

  toggleScreen = () => {
    this.setState({ landingScreen: !this.state.landingScreen });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.state.landingScreen ? (
          <LandingScreen handlePress={this.toggleScreen} />
        ) : (
          <PokeList handleBack={this.toggleScreen} />
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
