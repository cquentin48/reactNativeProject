import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeartStoneCardDetail from './heartstone-card-detail';

class SingleCardView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    render() {
      return (
        <View style={styles.container}>
          <HeartStoneCardDetail navigation={this.props.navigation}/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SingleCardView