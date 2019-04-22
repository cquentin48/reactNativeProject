import React from 'react';
import { View, FlatList} from 'react-native';
import CardListElement from './cardlistelement';
import CardDeckSearch from './carddecksearch';
import NavigationButtons from './navigationbuttons';

class HeartStoneTable extends React.Component {
  state={
    search: ''
  };
  
  updateSearch = search =>{
    this.setState({search});
  }

    render() {
      return (
        <View>
            <CardDeckSearch updateSearch={this.updateSearch} search={this.state.search}/>
            <NavigationButtons id={item.key} navigation={this.props.navigation} />
            <FlatList
                data={[{key: "1"},{key: "2"},{key: "3"},{key: "4"},{key: "5"},{key: "6"},{key: "7"},{key: "8"},{key: "9"},{key: "10"},
                       {key: "11"},{key: "12"},{key: "13"},{key: "14"},{key: "15"},{key: "16"},{key: "17"},{key: "18"},{key: "19"},{key: "20"},
                       {key: "21"},{key: "22"},{key: "23"},{key: "24"},{key: "25"},{key: "26"},{key: "27"},{key: "28"},{key: "29"},{key: "30"}]}
                renderItem={({item}) =>(<CardListElement id={item.key} navigation={this.props.navigation} />)}
                keyExtractor = {(item,index) => index.toString()}
                numColumns={1}
            />
        </View>
      );
    }
  }

export default HeartStoneTable