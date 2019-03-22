import React from 'react';
import {Text, View} from 'react-native';

class TopSearchBar extends React.Component {
    render() {
      return (
        <View
        style={{
          marginTop: 10
        }}
        >
          <View>
            <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold'
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