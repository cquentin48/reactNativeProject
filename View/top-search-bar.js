import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ApplicationStyles from './styles';

class TopSearchBar extends React.Component {
    render() {
      return (
        <View
        style={{
          marginTop: 0
        }}
        >
          <View>
            <Text style={{
              textAlign: 'center'
            }}>Pokédex National</Text>
          </View>
          <View>
            <Text style={{
              textAlign: 'center'
            }}>Il y a actuellement 964 pokémons répertoriés</Text>
          </View>
        </View>
      );
    }
}
export default TopSearchBar