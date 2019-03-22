
import  { NativeRouter, Route, Link } from 'react-router-native';

export default class Data_g extends React.Component {

   state = {
          loading: false,
          data: null,
          error: false
   };


   getData = () => {

   const baseUrl =  "https://pokeapi.co/api/v2/pokemon";
   const url = '${baseUrl}${this.props.path}';
   //${this.state.page * limit}&limit=${limit}`;
   this.setState({ loading: true});

   fetch(url)
        .then(res => res.json())
        .then(data => { this.setState({data});
                      })

        .catch(() => {

                    })



   }

}