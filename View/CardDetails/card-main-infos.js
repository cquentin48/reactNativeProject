import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CardMainInfos extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text h1>
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