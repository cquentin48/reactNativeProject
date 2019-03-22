import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

class PokedexElement extends React.Component {
    render() {
      return (
        <View style={{
          width:120,
          height: 150
        }}>
        <TouchableOpacity 
              onPress={() => {
                  this.props.navigation.navigate('Details', {
                      pokemonId: 3,
                    });
              }}>
          <Image
          style={{width:128, height:128}}
          source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}}
          />
          <Text
          style={{
            textAlign: 'center'
          }}
          >Bulbizarre</Text>
        </TouchableOpacity>
        </View>
      );
    }
  }

export default PokedexElement