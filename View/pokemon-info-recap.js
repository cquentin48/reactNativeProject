import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PokemonInfoRecap extends React.Component {
    render() {
        const { navigation } = this.props;
        const pokemonId = navigation.getParam('pokemonId', 'NO-ID');
      return (
        <View style={styles.container}>
          
        <Image
        style={{width:96, height:96}}
        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PokemonInfoRecap