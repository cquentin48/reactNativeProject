import React from 'react';
import {View, Button} from 'react-native';

class NavigationButtons extends React.Component{
    state={
        pageIndex:20
    }
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
                            this.previousPage()
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

    nextPage = () =>{
        let pageIndex = this.state.pageIndex
        this.props.nextPage(pageIndex)
    }

    previousPage = () =>{
        let pageIndex = this.state.pageIndex
        this.props.previousPage(pageIndex)
    }
}

export default NavigationButtons