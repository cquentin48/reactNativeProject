import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PokedexElement from './pokedex-element';

class PokedexTable extends React.Component {
    render() {
      return (
        <View>
            <TouchableOpacity 
            onPress={() => {
                this.props.navigation.navigate('Details', {
                    pokemonId: 3,
                  });
            }}>
            <PokedexElement navigation={this.props.navigation}/>
            </TouchableOpacity>
        </View>
      );
    }
  }

export default PokedexTable