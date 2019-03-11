import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class HomePage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Page de garde</Text>
          <Button
          title="Voir le pokédex"
          onPress={() => {
            this.props.navigation.navigate('PokedexList');
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

export default HomePage