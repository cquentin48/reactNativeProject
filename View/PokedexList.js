import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PokedexTable from './pokedex-table';

class PokedexList extends React.Component {
  static navigationOptions ={
    title: "Pokédex - 964 pokémons"
  }
    render() {
      return (
        <View >
        <PokedexTable
          style={{
            justifyContent: 'center'
          }}
          navigation = {this.props.navigation}
        />
        </View>
      );
    }
  }

export default PokedexList