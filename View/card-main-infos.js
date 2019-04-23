import React from 'react';
import { Text, View } from 'react-native';

class CardMainInfos extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>
            {this.props.title}
          </Text>
        </View>
        <View>
          <Text>
            {`Classe : ${this.props.class}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default CardMainInfos;