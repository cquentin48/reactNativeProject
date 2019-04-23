import React from 'react';
import { View, Image, Text} from 'react-native';

class CardListTableElementDetails extends React.Component {
    render(){
      const text = this.props.id
        return(
            <View style={
                {
                  flex: 1,
                  flexDirection: 'row'
                }
              }>
                <View>
                  <Image
                    source={{ uri: 'https://art.hearthstonejson.com/v1/orig/AT_001.png' }}
                    style={{ width: 79, height: 79 }}
                  />
                </View>
                <View>
                  <Text>
                    {text}
                  </Text>
                </View>
                <View>
                  <Text>
                    Inflige $8 |4(point,points) de dégâts à un serviteur.
                  </Text>
                </View>
            </View>
        );
    }
}

export default CardListTableElementDetails