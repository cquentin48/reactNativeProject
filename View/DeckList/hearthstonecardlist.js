import React from 'react';
import {View} from 'react-native';
import HeartStoneTable from './hearthstonetable';

class HearthStoneCardsList extends React.Component {
  static navigationOptions ={
    title: "Hearthstone - 1200 cartes"
  }
    render() {
      return (
        <HeartStoneTable
          style={{
            justifyContent: 'center'
          }}
          navigation = {this.props.navigation}
        />
      );
    }
  }

export default HearthStoneCardsList