'use strict';

import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import CardListElement from './cardlistelement';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import DeckTitle from './decktitle';
var Device_Width = Dimensions.get('window').width;

const pageIndex = 20;

class HeartStoneTable extends React.Component {
  state = {
    search: '',
    rawData: [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" }, { key: "6" }, { key: "7" }, { key: "8" }, { key: "9" }, { key: "10" },
    { key: "11" }, { key: "12" }, { key: "13" }, { key: "14" }, { key: "15" }, { key: "16" }, { key: "17" }, { key: "18" }, { key: "19" }, { key: "20" }],
    data: [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }, { key: "5" }, { key: "6" }, { key: "7" }, { key: "8" }, { key: "9" }, { key: "10" },
    { key: "11" }, { key: "12" }, { key: "13" }, { key: "14" }, { key: "15" }, { key: "16" }, { key: "17" }, { key: "18" }, { key: "19" }, { key: "20" }, { key: "21" }, { key: "22" }]
  };

  /**
   * Update the search according to the search entered by the user
   * @param searchInput search text entered by the user
   */
  updateSearch = searchInput => {
    this.setState({ search: searchInput });
    var filteredDataInput = this.state.data
    if (searchInput === "") {
      var rawData = this.state.rawData
      filteredDataInput = rawData
    } else {
      filteredDataInput = filteredDataInput.filter(singleKey => { return singleKey.key.includes(searchInput) })
    }
    this.setState({ filteredData: filteredDataInput })
  }

  /**
   * Swipe action event which load the next page
   */
  nextPage = newId => {
    let newData = this.loadData();
    this.loadNextPage(newData, 1)
  }

  /**
   * Swipe action event which load the previous page
   */
  previousPage = newId => {
    let newData = this.loadData();
    if (newData[0].key != "1") {
      this.loadNextPage(newData, -1)
    }
  }

  /**
   * Load the data from the state
   */
  loadData = () => {
    let newData = this.state.data
    return newData
  }

  /**
   * Load the next page to be loaded
   * @param newData the data loaded ready to be filtered
   * @param operatorMode action mode which could be next page or previous page
   */
  loadNextPage = (newData, operatorMode) => {
    if (operatorMode == -1 || operatorMode == 1) {
      newData.map(singleKey => singleKey.key = (parseInt(singleKey.key.toString()) + newId * operatorMode).toString())
      this.filterPaginationSearch()
    }
  }

  /**
   * Swipe Action event
   * @param {*} gestureName name of the gesture
   */
  onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_LEFT:
        this.nextPage(pageIndex)
        break;
      case SWIPE_RIGHT:
        this.previousPage(pageIndex)
        break;
    }
  }

  /**
   * Filter the pagination
   */
  filterPaginationSearch = () => {
    var searchInput = this.state.search
    this.updateSearch(searchInput)
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    const { state } = this.props.navigation
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={styles.GestureRecognizer}
      >
        <DeckTitle decktitle="Toutes les cartes" />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (<CardListElement id={item.key.toString()}
            navigation={this.props.navigation}
            imageURL='https://art.hearthstonejson.com/v1/orig/AT_001.png'
            title={"Lance de flammes"}
            description="Inflige $8 |4(point,points) de dégâts à un serviteur."
          />)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          extraData={this.state}
        />
      </GestureRecognizer>
    );
  }
}
const styles = StyleSheet.create({

  GestureRecognizer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  }
})
export default HeartStoneTable