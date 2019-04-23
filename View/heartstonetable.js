import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import DeckListNavigation from './decklistnavigation';

class HeartStoneTable extends React.Component {
  state={
    search: '',
    key:3
  };
  
  updateSearch = search =>{
    this.setState({search});
  }

    render() {
      const search = this.state.search;
      return (
        <View>
            <View>
              <CardDeckSearch updateSearch={this.updateSearch} search={search}/>
            </View>
            <View>
              <DeckListNavigation/>
            </View>
            <View>
              <FlatList
                  data={[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
                        {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"}]}
                  renderItem={({item}) =>(<CardListElement id={item.key} navigation={this.props.navigation} />)}
                  keyExtractor = {(item,index) => index.toString()}
                  numColumns={1}
              />
            </View>
        </View>
      );
    }
  }

export default HeartStoneTable