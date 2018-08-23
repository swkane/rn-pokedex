import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PokeCard from "./PokeCard";

class PokeList extends React.Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokedex/2/")
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemon: data.pokemon_entries });
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          {this.state.pokemon.map(pokemon => (
            <PokeCard key={pokemon.entry_number} pokemon={pokemon} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 15
  }
});

export default PokeList;
