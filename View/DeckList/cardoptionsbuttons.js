import React from 'react';
import { View, Button } from 'react-native';

class CardOptionButtons extends React.Component {
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
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                              });
                        }}
                        title="Détails de la carte"
                        color="#26A69A"
                        style={{flex:0.5, borderWidth:1, height:20}}
                    />
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                              });
                        }}
                        title="Acheter la carte"
                        color="#26A69A"
                        style={{flex:0.5, borderWidth:1, height:20}}
                    />
                </View>
            </View>
        );
    }
}

export default CardOptionButtons