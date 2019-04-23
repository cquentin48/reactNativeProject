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
            {this.isDefined(this.props.defined)}
          </Text>
        </View>
        <View>
          <Text>
            {this.isCollectible(this.props.collectible)}
          </Text>
        </View>
      </View>
    );
  }

  isDefined = defined =>{
    if(defined){
      return "Défini"
    }else{
      return "Not defined"
    }
  }

  isCollectible = collectible =>{
    if(collectible){
      return "Carte collectible"
    }else{
      return "Carte non collectible"
    }
  }
}

export default CardDetail;