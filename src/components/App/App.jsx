import { Component } from 'react';
import { GlobalStyle } from 'utils/GlobalStyle';
import { ProductReviewForm } from 'components/ProductReviewForm/ProductReviewForm';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ProductReviewForm />
      </>
    );
  }
}

export default App;
