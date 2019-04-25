import React from 'react';
import { View, Image, Text} from 'react-native';

class CardListTableElementDetails extends React.Component {
    render(){
        return(
            <View style={
                {
                  flex: 1,
                  flexDirection: 'row'
                }
              }>
                <View>
                  <Image
                    source={{ uri: this.props.imageURL }}
                    style={{ width: 79, height: 79 }}
                  />
                </View>
                <View>
                  <Text>
                    {this.props.title}
                  </Text>
                </View>
                <View>
                  <Text>
                    {this.props.description}
                  </Text>
                </View>
            </View>
        );
    }
}

export default CardListTableElementDetails