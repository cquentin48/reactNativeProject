import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import HeartStoneCardsList from './View/heartstonecardlist'
import SingleCardView from './View/single-card-view';

const App = createStackNavigator(
  {
    Home: HomePage,
    PokedexList : HeartStoneCardsList,
    Details: SingleCardView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);