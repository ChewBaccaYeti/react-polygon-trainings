import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm onSubmit={console.log} />
      </Layout>
    );
  }
}

export default App;
