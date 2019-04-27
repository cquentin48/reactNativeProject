import React from 'react';
import { StyleSheet } from 'react-native';
import HeartStoneTable from './hearthstonetable';

class HearthStoneCardsList extends React.Component {
  static navigationOptions = {
    title: "Hearthstone - 1200 cartes"
  }
  render() {
    return (
      <HeartStoneTable
        style={this.view}
        navigation={this.props.navigation}
      />
    );
  }
}
const style = StyleSheet.create({
  view:{
    justifyContent: 'center'
  }
})
export default HearthStoneCardsList