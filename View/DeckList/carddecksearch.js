import React from 'react';
import { TextInput } from 'react-native';

class CardDeckSearch extends React.Component {
      updateSearch = search => {
        this.props.updateSearch(search)
      };
    
      render() {
        const { searchInput } = this.props.search;
    
        return (
          <TextInput
          onChangeText={(text) => this.updateSearch(text)}
          value={this.props.search}
          />
        );
      }
}

export default CardDeckSearch