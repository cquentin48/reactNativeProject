import React from 'react';
import { Text, View, Image } from 'react-native';

class CardImage extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              style={{width:135, height:202}}
              source={{uri: this.props.imageUrl}}
            />
          </View>
          <View>
            <Text>
              {`Artiste : ${this.props.artistName}`}
            </Text>
            <Text>
              {`${this.props.description}`}
            </Text>
        </View>
      </View>
    );
  }
}

export default CardImage;