import React from 'react';
import {View, Image, Text} from 'react-native';

class PokedexElement extends React.Component {
    render() {
      return (
        <View style={{
          width:128
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
        </View>
      );
    }
  }

export default PokedexElement