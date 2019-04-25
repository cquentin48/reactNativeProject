import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class HomePage extends React.Component {
    static navigationOptions ={
      title: "Heartstone - API - React Native"
    }
    render() {
      return (
        <View style={styles.container}>
        <TouchableOpacity 
              onPress={() => {
                  this.props.navigation.navigate('DeckList');
              }}>
          <Image
            source={require("../assets/icon-hearthstone.png")}
          />
        </TouchableOpacity>
        <Text>
          Projet réalisé par Elzbetia BEILING & Quentin CHAPEL
        </Text>
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