import React from 'react';
import { View} from 'react-native';
import PokedexElement from './pokedex-element';
import { ScrollView } from 'react-native-gesture-handler';

class PokedexTable extends React.Component {
    render() {
      return (
        <View style={{flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
            <ScrollView>
            </ScrollView>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
                <PokedexElement navigation={this.props.navigation}/>
        </View>
      );
    }
  }

export default PokedexTable