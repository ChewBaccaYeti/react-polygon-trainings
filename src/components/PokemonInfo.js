import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ loading: true, pokemon: null }); // Reset pokemon status before new search request

      console.log('prevProps.pokemonName:', prevProps.pokemonName);
      console.log('this.props.pokemonName:', this.props.pokemonName);
      console.log('Pokemon name has been changed.');

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`There no pokemon with ${nextName} name.`)
          );
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false })); // Shorthand object properties
    }
  }

  render() {
    const { pokemon, loading, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Enter pokemon name.</div>;
    } else if (status === 'pending') {
      return <div>Loading...</div>;
    } else if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    } else if (status === 'resolved') {
      return (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprite.other['official-artwork'].fron_default}
            alt={pokemon.name}
            width="240"
          />
        </div>
      );
    }

    return (
      <div>
        <h1>Pokemon Info</h1>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Loading...</div>}
        {!pokemonName && <div>Enter pokemon name.</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprite.other['official-artwork'].fron_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}
