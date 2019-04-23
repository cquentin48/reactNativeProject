import React from 'react';
import { Text, View } from 'react-native';

class CardDetail extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>
            {`Rarity : ${this.props.rarity}`}
            </Text>
        </View>
        <View>
          <Text>
            {`Type : ${this.props.type}`}
            </Text>
        </View>
        <View>
          <Text>
            {this.props.defined}
          </Text>
        </View>
        <View>
          <Text>
            {this.props.collectible}
          </Text>
        </View>
      </View>
    );
  }
}

export default CardDetail;