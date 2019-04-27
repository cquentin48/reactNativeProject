import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchInput from './searchinput'
import SearchButtons from './searchbuttons'

class SearchView extends React.Component {
  static navigationOptions = {
      title: "Recherche de carte"
  }

  state = {
      search: "",
      option: ""
  }

  updateSearchText = (searchInput) => {
    this.setState({
      search:searchInput
    })
  }

  loadSearchResults = () =>{
    this.props.navigation.navigate('DeckList',{
      searchInput:this.state.search
    });
  }

  razButtonHandle = () =>{
    this.setState({
      search:""
    })
  }

    render() {
      const searchInput = (this.state.search == null) ? "" : this.state.search
      return (
        <View style={styles.container}>
          <SearchInput
            search={searchInput}
            updateSearch={this.updateSearchText}
          />
          <SearchButtons
            razButtonHandle={this.razButtonHandle}
            loadSearchResults={this.loadSearchResults}
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

export default SearchView