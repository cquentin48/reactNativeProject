import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import NavigationButtons from './navigationbuttons';

class HeartStoneTable extends React.Component {
  state={
    search: '',
    data:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}]
  };
  
  updateSearch = searchInput =>{
    this.setState({search: searchInput});
  }

  nextPage = newId =>{
    let newData = this.state.data;
    newData.map(singleKey => singleKey.key = (parseInt(singleKey.key.toString())+newId).toString())
    this.setState({
      data:newData
    })
  }

    render() {
      const search = this.state.search;
      return (
        <View>
            <View>
              <CardDeckSearch updateSearch={this.updateSearch} search={search}/>
            </View>
            <View>
              <NavigationButtons navigation={this.props.navigation} updateIndex={this.nextPage}/>
            </View>
            <View>
              <FlatList
                  data={this.state.data}
                  renderItem={({item}) =>(<CardListElement id={item.key.toString()} navigation={this.props.navigation} />)}
                  keyExtractor = {(item,index) => index.toString()}
                  numColumns={1}
                  extraData = {this.state}
              />
            </View>
        </View>
      );
    }
  }

export default HeartStoneTable