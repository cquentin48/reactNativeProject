import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

class CardListTableElementDetails extends React.Component {
    render(){
        return(
            <View style={
                styles.view
              }>
                <View>
                  <Image
                    source={{ uri: this.props.imageURL }}
                    style={styles.image}
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
const styles = StyleSheet.create({

  view:{
    flex: 1,
    flexDirection: 'row'
  },
  image : { width: 79, height: 79 }
})
export default CardListTableElementDetails