import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class CardImage extends React.Component {
  render() {
    return (
      <View>
        <View
          style={styles.view}>
            <Image
              style={styles.image}
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
const styles = StyleSheet.create({

  view:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {width:135, height:202}
})
export default CardImage;