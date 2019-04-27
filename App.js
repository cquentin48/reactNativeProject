import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import HearthStoneCardsList from './View/DeckList/hearthstonecardlist'
import SingleCardView from './View/CardDetails/single-card-view';

const App = createStackNavigator(
  {
    Home: HomePage,
    DeckList : HearthStoneCardsList,
    Details: SingleCardView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);