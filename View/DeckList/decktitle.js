'use strict';

import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'

class DeckTitle extends React.Component {
  render() {
    return (
      <View
        style={style.view}>
        <Text h2>
          {this.props.decktitle}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default DeckTitle;