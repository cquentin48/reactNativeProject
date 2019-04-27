import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

class NavigationButtons extends React.Component {
    state = {
        pageIndex: 20
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.clickHandler}
                    style={styles.TouchableOpacityStyle}>
                    <Image
                        //We are making FAB using TouchableOpacity with an image
                        //We are using online image here
                        source={{
                            uri: 'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
                        }}
                        //You can use you project image Example below
                        //source={require('./images/float-add-icon.png')}
                        style={styles.FloatingButtonStyle}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    nextPage = () => {
        let pageIndex = this.state.pageIndex
        this.props.nextPage(pageIndex)
    }

    previousPage = () => {
        let pageIndex = this.state.pageIndex
        this.props.previousPage(pageIndex)
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

    TouchableOpacityStyle: {
        position: 'absolute',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
export default NavigationButtons