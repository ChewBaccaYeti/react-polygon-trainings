// 3rd-HTTP-requests
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/PokemonForm';
import PokemonInfo from 'components/PokemonInfo';

export class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
    console.log(pokemonName);
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
  }
}

export default App;
