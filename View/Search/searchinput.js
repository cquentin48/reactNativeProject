import React from 'react';
import { TextInput, View } from 'react-native';
import {Text} from 'react-native-elements';

class SearchInput extends React.Component {
      /**
       * Call the mother component to update search text
       */
      updateSearch = search => {
        this.props.updateSearch(search)
      };
    
      render() {
        const { searchInput } = this.props.search;
        return (
          <View>
            <Text h4>1. Veuillez entrer la valeur de recherche</Text>
            <TextInput
            onChangeText={(text) => this.updateSearch(text)}
            value={this.props.search}
            placeholder="Filtre"
            />
          </View>
        );
      }
}

export default SearchInput