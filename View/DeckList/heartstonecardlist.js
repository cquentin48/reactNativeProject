import React from 'react';
import {View} from 'react-native';
import HeartStoneTable from './heartstonetable';

class HeartStoneCardsList extends React.Component {
  static navigationOptions ={
    title: "Heartstone - 1200 cartes"
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

export default HeartStoneCardsList