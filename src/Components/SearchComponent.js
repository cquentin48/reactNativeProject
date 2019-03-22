import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';


export default class SearchComponent extends React.Component {


constructor(props) {
      super(props);

      this.state = {

      username: '',
      error : false

      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e){
   this.setState( {
       username: e.nativeEvent.text

   });
   }
   handleSubmit(){
   console.log(this.state.username);
   }

render(){



  }



}

