import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SinglePokemonView extends React.Component {
    render() {
        const { navigation } = this.props;
        const pokemonId = navigation.getParam('pokemonId', 'NO-ID');
      return (
        <View style={styles.container}>
          <Image
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

export default SinglePokemonView