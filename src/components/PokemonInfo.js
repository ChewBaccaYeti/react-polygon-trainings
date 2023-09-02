import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null, // false
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.PokemonName;
    const nextName = this.props.PokemonName;

    if (prevName !== nextName) {
      console.log('prevProps.PokemonName:', prevProps.PokemonName);
      console.log('this.props.PokemonName:', this.props.PokemonName);
      console.log('Pokemon name has been changed.');

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon })); // Shorthand object properties
    }
  }

  render() {
    return (
      <div>
        <h1>Pokemon Info</h1>
        {!this.state.pokemonName && <div>Enter pokemon name.</div>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
        <p>{this.props.PokemonName}</p>
      </div>
    );
  }
}
