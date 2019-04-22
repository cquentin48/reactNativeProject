import React from 'react';
import {View, Image, Text, TouchableOpacity, Button} from 'react-native';
import CardOptionButtons from './cardoptionsbuttons';

class CardListElement extends React.Component {
    render() {
      return (
        <View style={{
          width: 120,
          height: 150
        }}>
              <View style={
                {
                  flex:1,
                  flexDirection: 'row'
                }
              }>
                <View>
                  <Image
                  source={{uri: 'https://art.hearthstonejson.com/v1/orig/AT_001.png'}}
                  style={{width: 79, height: 79}}
                  />
                </View>
                <View>
                  <Text>
                    Lance de flammes
                  </Text>
                </View>
                <View>
                  <Text>
                    Inflige $8 |4(point,points) de dégâts à un serviteur.
                  </Text>
                </View>
              </View>
        </View>
      );
    }
  }

export default CardListElement