import { Component } from 'react';
import { GlobalStyle } from 'utils/GlobalStyle';
import { Layout } from 'utils/Layout';
import { MaterialList } from 'components/MaterialList/MaterialList';
import { MaterialEditorForm } from 'components/MaterialEditorForm/MaterialEditorForm';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: false });
      const materials = await API.getMaterial();
      this.setState({ materials });
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {error && (
          <p>Crap! Something get wrooong :( Reload the page and try again.</p>
        )}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'Loading'
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </Layout>
    );
  }
}

export default App;
