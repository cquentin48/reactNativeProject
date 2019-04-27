import React from 'react';
import { View, StyleSheet} from 'react-native';
import CardOptionButtons from './cardoptionsbuttons';
import CardListTableElementDetails from './cardlisttableelementdetails'

class CardListElement extends React.Component {
  render() {
    return (
      <View>
        <View style={style.view}>
          <CardListTableElementDetails
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          imageURL={this.props.imageURL}
          />
          <CardOptionButtons id={this.props.id} navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  view:{
    width: 120,
    height: 150,
    justifyContent: "center"
  }
})
export default CardListElement