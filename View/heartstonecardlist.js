import React from 'react';
import {View} from 'react-native';
import HeartStoneTable from './heartstonetable';

class HeartStoneCardsList extends React.Component {
  static navigationOptions ={
    title: "Heartstone - 1200 cartes"
  }
    render() {
      return (
        <View >
        <HeartStoneTable
          style={{
            justifyContent: 'center'
          }}
          navigation = {this.props.navigation}
        />
        </View>
      );
    }
  }

export default HeartStoneCardsList