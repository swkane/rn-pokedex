import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PokeCard = props => {
  return (
    <View style={styles.cardStyle}>
      <Text>{props.pokemon.pokemon_species.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 100,
    width: 100,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default PokeCard;
