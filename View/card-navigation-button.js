import React from 'react';
import { Button, View } from 'react-native';

class CardNavigationButton extends React.Component {
  render() {
    return (
    <View>
        <Button
          title="Retour"
          onPress={() => {
            this.props.navigation.navigate('PokedexList');
          }}
        />
    </View>
    );
  }
}

export default CardNavigationButton;