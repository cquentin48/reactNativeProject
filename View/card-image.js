import React from 'react';
import { Text, View, Image } from 'react-native';

class CardImage extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Image
            style={{width:135, height:202}}
            source={{uri: this.props.imageUrl}}
          />
          <Text>
            {`Artiste : ${this.props.artistName}`}
          </Text>
        </View>
      </View>
    );
  }
}

export default CardImage;