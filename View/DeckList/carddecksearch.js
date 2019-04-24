import React from 'react';
import { SearchBar } from 'react-native-elements';

class CardDeckSearch extends React.Component {
      updateSearch = search => {
        this.props.updateSearch(search)
      };
    
      render() {
        const { searchInput } = this.props.search;
    
        return (
          <SearchBar
            placeholder="Filtre"
            onChangeText={this.updateSearch(searchInput)}
            value={searchInput}
          />
        );
      }
}

export default CardDeckSearch