import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import HeartStoneCardsList from './View/DeckList/heartstonecardlist'
import SingleCardView from './View/CardDetails/single-card-view';

const App = createStackNavigator(
  {
    Home: HomePage,
    DeckList : HeartStoneCardsList,
    Details: SingleCardView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);