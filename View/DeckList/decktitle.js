'use strict';

import React from 'react';
import { View} from 'react-native';
import {Text} from 'react-native-elements'

class DeckTitle extends React.Component {
  render() {
    return (
        <View
            style={{
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text h2>
                {this.props.decktitle}
            </Text>
        </View>
    );
  }
}
export default DeckTitle;