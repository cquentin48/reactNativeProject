import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class SearchButtons extends React.Component {
    static navigationOptions = {
        title: "Recherche de carte"
    }

    render() {
        return (
            <View
                style={
                    {
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }
                }>
                <View style={
                    {
                        flexDirection: 'row'
                    }
                }>
                    <Button
                        onPress={this.props.loadSearchResults}
                        title="Valider la recherche"
                        style={{flex:0.5, borderWidth:1, height:20}}
                        color="#ff0000" />
                    <Button
                        onPress={this.props.razButtonHandle}
                        title="Raz la recherche"
                        style={{flex:0.5, borderWidth:1, height:20}}
                        color="#00ff00" />
                </View>
            </View>
        );
    }
}

export default SearchButtons