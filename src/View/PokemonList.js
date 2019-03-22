import React from 'react';

import { FlatList ,StyleSheet, Text, View, Button, NavigatorIOS } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import pokemons from  '../Features/Data';

class PokedexList extends React.Component {
  static navigationOptions ={
    title: "Pokédex - 964 pokémons"
  }
    render() {
      return (

        <View style={styles.container}>

          <Text style={styles.textinput3}>
            {'Liste des pokémons'}{'\n'}{'\n'}</Text>

          <FlatList
          data={pokemons}
          keyExtractor = {(item) => item.name.toString()}
          renderItem = {({item}) => <Text>{item.name}</Text>}
          />
          <Button
          title="Voir le pokémon"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              pokemonId: 3,
            });
          }}
          navigation = {this.props.navigation}
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
    textinput3: {
       flex: 1,
        marginStart:10,
        marginLeft: 5,
        marginRight: 5,
        height: 10,
        paddingLeft: 5
      }
  });

export default PokedexList