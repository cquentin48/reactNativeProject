import React from 'react';
import { Text, View } from 'react-native';

class CardDetail extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>
            {`Rareté : ${this.props.rarity}`}
            </Text>
        </View>
        <View>
          <Text>
            {`Type : ${this.props.type}`}
            </Text>
        </View>
        <View>
          <Text>
            {this.isDefined(this.props.defined,"Défini", "Non défini")}
          </Text>
        </View>
        <View>
          <Text>
            {this.isDefined(this.props.collectible,"Collectible","Non collectible")}
          </Text>
        </View>
      </View>
    );
  }

  /**
   * Check a condition and displays a message according to the boolean
   * @param isTrue booleanCondition
   * @param trueMessage message to display if [isTrue] is [true]
   * @param falseMessage message to display if [isTrue] is [false]
   */
  isDefined(isTrue, trueMessage, falseMessage){
    if(isTrue){
      return trueMessage
    }else{
      return falseMessage
    }
  }
}

export default CardDetail;