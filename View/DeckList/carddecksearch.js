import React from 'react';
import { SearchBar } from 'react-native-elements';

class CardDeckSearch extends React.Component {
      updateSearch = search => {
        this.props.updateSearch
      };
    
      render() {
        const { searchInput } = this.props.search;
    
        return (
          <SearchBar
            placeholder="Filtre"
            onChangeText={this.updateSearch}
            value={searchInput}
          />
        );
      }
}

export default CardDeckSearch