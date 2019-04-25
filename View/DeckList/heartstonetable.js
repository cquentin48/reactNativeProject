import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import NavigationButtons from './navigationbuttons';

class HeartStoneTable extends React.Component {
  state={
    search: '',
    rawData:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}],
    data:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}]
  };
  
  updateSearch = searchInput =>{
    this.setState({search: searchInput});
    var filteredDataInput = this.state.data
    if(searchInput === ""){
      var rawData = this.state.rawData
      filteredDataInput = rawData
    }else{
      filteredDataInput = filteredDataInput.filter(singleKey => {return singleKey.key.includes(searchInput)})
    }
    this.setState({filteredData : filteredDataInput})
  }

  nextPage = newId =>{
    let newData = this.state.data;
    newData.map(singleKey => singleKey.key = (parseInt(singleKey.key.toString())+newId).toString())
    this.filterPaginationSearch()
  }

  previousPage = newId =>{
    let newData = this.state.data;
    if(newData[0].key != "1"){
      newData.map(singleKey => singleKey.key = (parseInt(singleKey.key.toString())-newId).toString())
      this.filterPaginationSearch()
    }
  }

  filterPaginationSearch = () =>{
    var searchInput = this.state.search
    this.updateSearch(searchInput)
  }

    render() {
      const search = this.state.search;
      return (
        <View>
            <View>
              <CardDeckSearch updateSearch={this.updateSearch} search={search}/>
            </View>
            <View>
              <NavigationButtons
                navigation={this.props.navigation}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
              />
            </View>
            <View>
              <FlatList
                  data={this.state.data}
                  renderItem={({item}) =>(<CardListElement id={item.key.toString()}
                                            navigation={this.props.navigation}
                                            imageURL='https://art.hearthstonejson.com/v1/orig/AT_001.png'
                                            title="Lance de flammes"
                                            description="Inflige $8 |4(point,points) de dégâts à un serviteur."
                                            />)}
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