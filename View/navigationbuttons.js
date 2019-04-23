import React from 'react';
import {View, Button} from 'react-native';

class NavigationButtons extends React.Component{
    render(){
        return (
            <View>
                <View style={
                    {
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }
                }>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                              });
                        }}
                        title="<"
                        color="#26A69A"
                        style={{borderWidth:1, height:40, width: 40}}
                    />
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                              });
                        }}
                        title=">"
                        color="#26A69A"
                        style={{borderWidth:1, height:40, width: 40}}
                    />
                </View>
            </View>
        );
    }
}

export default NavigationButtons