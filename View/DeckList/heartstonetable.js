'use strict';

import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const pageIndex = 20;

class HeartStoneTable extends React.Component {
  state={
    search: '',
    rawData:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}],
    data:[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
    {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},{key: "21"},{key: "22"}]
  };
  
  onSwipeLeft() {
    console.log("Swipe!")
    this.previousPage(pageIndex);
  }

  onSwipeRight() {
    console.log("Swipe!")
    this.nextPage(pageIndex);
  }
  
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
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
      console.log(this.state.data)
      return (
        <View>
            <View>
              <CardDeckSearch updateSearch={this.updateSearch} search={search}/>
            </View>
            <View>
            <GestureRecognizer
              onSwipeLeft={() => this.onSwipeLeft()}
              onSwipeRight={() => this.onSwipeRight()}
              config={config}
              style={{
                flex: 1,
                backgroundColor: this.state.backgroundColor
              }}
            >
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
              </GestureRecognizer>
            </View>
        </View>
      );
    }
  }

export default HeartStoneTable