import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeartStoneCardDetail from './heartstone-card-detail';

class SingleCardView extends React.Component {
  static navigationOptions ={
    title: "#1 - Effigie"
  }
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