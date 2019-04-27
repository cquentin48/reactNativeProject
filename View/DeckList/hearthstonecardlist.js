import React from 'react';
import {View} from 'react-native';
import HeartStoneTable from './hearthstonetable';
import { getAllCardsWithFilter, getAllCards } from '../RoutesAPI';
//import { getAllCards } from '../Model/RouteAPI'

class HearthStoneCardsList extends React.Component {


  constructor(props) {
    super(props)
    this.searchedText = ""
    this.filter = "name"
    this.page = 0
    this.totalPages = 0
    this.state = {
       cards: [],
       isLoading: false,
       start: 0,
       sizePage: 10,
       maxSize:0
    }
    this.loadCards = this.loadCards.bind(this)
    //this.search(null,null)
 }




  loadCards() {
   // if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getAllCards()
      .then(data => {
         // this.page = data.page
         // this.totalPages = data.total_pages
         if(data.data.cards !== null)
          {
          this.setState({
            cards: [ ...this.state.cards, ...data.data.cards ],
            isLoading: false,
            start: 0,
            sizePage: 10,
            maxSize:data.data.cards.length,
            isLoading: false
          })
          } else {
          this.setState({
                     cards: [ ...this.state.cards, ...[] ],
                     isLoading: false,
                     start: 0,
                     sizePage: 10,
                     maxSize:0
                   })

         }
      })

    //}
  }

  search(filter, searchedText)
  {
     if (this.searchedText.length > 0) {
     getAllCardsWithFilter(filter,value)
       .then(data => {
           if(data.data.cards !== null)
           {
           this.setState({
                        cards: [ ...this.state.cards, ...data.data.cards ],
                        isLoading: false,
                        start: 0,
                        sizePage: 10,
                        maxSize:data.data.cards.length,
                        isLoading: false
                      })
           }
           else
           {
           this.setState({
                                 cards: [ ...this.state.cards, ...[] ],
                                 isLoading: false,
                                 start: 0,
                                 sizePage: 10,
                                 maxSize:0
                               })
           }
       });
     }
   }



  static navigationOptions ={
    title: "Hearthstone cartes"
  }
    render() {
      return (
        <HeartStoneTable
          style={{
            justifyContent: 'center'
          }}
          //passer les props
           cards = {this.state.cards}
           loadCards = {this.loadCards}
           search = {this.search.bind(this)}
           page = {this.page}
           totalPages = {this.totalPages}
           navigation = {this.props.navigation}
        />
      );
    }


  }

export default HearthStoneCardsList