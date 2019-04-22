import React from 'react';
import { View, Image, Text} from 'react-native';
import CardOptionButtons from './cardoptionsbuttons';
import CardListTableElementDetails from './cardlisttableelementdetails'

class CardListElement extends React.Component {
  render() {
    return (
      <View>
        <View style={{
          width: 120,
          height: 150,
          justifyContent: "center"
        }}>
          <CardListTableElementDetails/>
          <CardOptionButtons id={this.props.id} navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

export default CardListElement