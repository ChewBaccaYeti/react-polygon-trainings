import React, { Component } from 'react';
import { MdCatchingPokemon } from 'react-icons/md';
import { toast } from 'react-toastify';

const styles = { from: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.warn('Please, enter pokemon name.', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      //   alert('Please enter pokemon name');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
          style={{ marginRight: 8 }}
        />
        <button type="submit">
          <MdCatchingPokemon style={{ marginRight: 8 }} />
          Find Pokemon
        </button>
      </form>
    );
  }
}
