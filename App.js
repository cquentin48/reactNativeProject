import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import PokedexList from './View/PokedexList';
import SingleCardView from './View/single-card-view';

const App = createStackNavigator(
  {
    Home: HomePage,
    PokedexList : PokedexList,
    Details: SingleCardView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);