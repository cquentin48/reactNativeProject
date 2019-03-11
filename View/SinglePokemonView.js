import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomePage extends React.Component {
    render() {
        const { navigation } = this.props;
        const pokemonId = navigation.getParam('pokemonId', 'NO-ID');
      return (
        <View style={styles.container}>
          <Text>Pokémon n°{JSON.stringify(pokemonId)}.</Text>
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

export default HomePage