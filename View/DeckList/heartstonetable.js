import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import NavigationButtons from './navigationbuttons';

class HeartStoneTable extends React.Component {
  state={
    search: '',
    key:3,
    data:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}]
  };
  
  updateSearch = search =>{
    this.setState({search});
  }

  nextPage = newId =>{
    let newData = this.state.data;
    newData.map(singleKey => singleKey.key = (parseInt(singleKey.key.toString())+newId).toString())
    this.setState({
      data:newData
    })
  }

  shouldComponentUpdate(nextProps) {
    return true;
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