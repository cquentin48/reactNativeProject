import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import HearthStoneCardsList from './View/DeckList/hearthstonecardlist'
import SingleCardView from './View/CardDetails/single-card-view';
import SearchView from './View/Search/searchview';

const App = createStackNavigator(
  {
    Home: HomePage,
    DeckList : HearthStoneCardsList,
    Details: SingleCardView,
    CardSearch: SearchView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);