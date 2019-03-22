import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import PokedexTable from './pokedex-table';
import TopSearchBar from './top-search-bar';

class PokedexList extends React.Component {
    render() {
      return (
        <View >
        <TopSearchBar
          style={
            {textAlignVertical: 'top'}
          }
        />
        <PokedexTable
          navigation = {this.props.navigation}
          originComponentId = {this.props.originComponentId}
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