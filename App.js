import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import HeartStoneCardsList from './View/heartstonecardlist'
import SinglePokemonView from './View/SinglePokemonView';

const App = createStackNavigator(
  {
    Home: HomePage,
    PokedexList : HeartStoneCardsList,
    Details: SinglePokemonView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);