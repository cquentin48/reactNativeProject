import React from 'react';
import { View, Button,StyleSheet } from 'react-native';

class CardOptionButtons extends React.Component {
    render() {
        return (
            <View
                style={
                styles.firstView
            }>
                <View style={
                    styles.secondView
                }>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                                title: "Effigie 2"
                              });
                        }}
                        title="Détails de la carte"
                        color="#26A69A"
                        style={styles.button}
                    />
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Details', {
                                pokemonId: this.props.id,
                              });
                        }}
                        title="Acheter la carte"
                        color="#26A69A"
                        style={styles.button}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    secondView:{
        flexDirection: 'row'
    },
    button:{
        flex: 0.5,
        borderWidth: 1,
        height: 20
    }
})

export default CardOptionButtons