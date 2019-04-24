import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardDetail from './card-details';
import CardMainInfos from './card-main-infos';
import CardImage from './card-image';

class HeartStoneCardDetail extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View>
            <CardMainInfos title="Effigie" class=""/>
          </View>
          <View>
            <CardImage
              imageUrl="https://art.hearthstonejson.com/v1/render/latest/frFR/512x/AT_002.png"
              artistName="Tooth"
              description="Un homme, une flamme… Un homme et une flamme !"
              />
          </View>
          <View>
            <CardDetail rarity="rare" type="spell" defined= {false} collectible={true}/>
          </View>
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

export default HeartStoneCardDetail