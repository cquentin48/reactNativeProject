import React from 'react'
import { FlatList, StyleSheet, View, TextInput, Button } from 'react-native'


export default class Search extends React.Component{
  render(){

      return(
             //ici o rend à l'écran les elements graphiques de notre component custom Search
         <View style={{ marginTop: 20 }}>
                    <TextInput style={[ styles2.textinput,{ marginBottom: 10 }]}
                    placeholder='Pokemon Name'/>
                    <Button title='Rechercher' onPress={() => {}}/>
                    <FlatList
                    data= {[ {key: 'a'}, {key: 'b'} ]}
                    renderItem= {({item}) => <Text>{item.key}</Text>}
                    />
        </View>

       )

  }
}

const styles2 = StyleSheet.create( {
  textinput: {
   flex: 1,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  textinput2: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000003',
        borderWidth: 1,
        paddingLeft: 5


      }

})


//render() {...}  équivaut à  render = function() {...}  .