import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class PokedexList extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Liste des pokémons</Text>
          <Button
          title="Voir le pokémon"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
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

export default PokedexList