import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from 'services/pokemon-api';
export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' }); // No needs for reset pokemon status before new search request

      console.log('prevProps.pokemonName:', prevProps.pokemonName);
      console.log('this.props.pokemonName:', this.props.pokemonName);
      console.log('Pokemon name has been changed.');

      setTimeout(() => {
        pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return (
        <div>
          <strong>Enter pokemon name.</strong>
        </div>
      );
    } else if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    } else if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    } else if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
