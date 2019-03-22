import React from 'react';
import {View, Image, Text} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'react-native-elements';

class PokedexElement extends React.Component {
    render() {
      return (
        <View>
        <Image
        style={{width:96, height:96}}
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