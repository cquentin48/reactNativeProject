import React from 'react';
import { View, FlatList} from 'react-native';
import PokedexElement from './pokedex-element';

class PokedexTable extends React.Component {
    render() {
      return (
        <View>
            <FlatList
                contentContainerStyle={{
                    flexDirection: 'column', // main axis
                    justifyContent: 'center', // main axis
                    alignItems: 'center', // cross axis
                }}
                data={[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
                       {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},
                       {key: "21"},{key: "22"},{key: "23"},{key: "24"},{key: "25"},{key: "26"},{key: "27"},{key: "28"},{key: "29"},{key: "30"}]}
                renderItem={({item}) =>(<PokedexElement id={item.key} navigation={this.props.navigation} />)}
                keyExtractor = {(item,index) => index.toString()}
                numColumns={3}
            />
        </View>
      );
    }
  }

export default PokedexTable