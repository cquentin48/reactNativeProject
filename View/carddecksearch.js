import React from 'react';
import { SearchBar } from 'react-native-elements';

class CardDeckSearch extends React.Component{
    render(){
        const { search } = this.props.search;
        return(  
          <SearchBar
          placeholder="Filtre"
          onChangeText={this.updateSearch}
          value={search}
        />
        )
    }

    updateSearch = search =>{
        this.props.updateSearch(search);
    };
}

export default CardDeckSearch