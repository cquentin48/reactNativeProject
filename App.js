import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './View/HomePage';
import PokedexList from './View/PokedexList'
import SinglePokemonView from './View/SinglePokemonView';

const App = createStackNavigator(
  {
    Home: HomePage,
    PokedexList : PokedexList,
    Details: SinglePokemonView
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);