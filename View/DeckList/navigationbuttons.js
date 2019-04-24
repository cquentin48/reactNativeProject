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
                            this.nextPage()
                        }}
                        title="<"
                        color="#26A69A"
                        style={{borderWidth:1, height:40, width: 40}}
                    />
                    <Button
                        onPress={() => {
                            this.nextPage()
                        }}
                        title=">"
                        color="#26A69A"
                        style={{borderWidth:1, height:40, width: 40}}
                    />
                </View>
            </View>
        );
    }

    nextPage = newId =>{
        this.props.updateIndex(20)
    }
}

export default NavigationButtons