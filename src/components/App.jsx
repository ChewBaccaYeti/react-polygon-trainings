import { Painting } from 'components/Painting';
import { paintings } from './paintings.json';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Painting
        imgUrl={paintings[0].imgUrl}
        title={paintings[0].title}
        author={paintings[0].author}
        quantity={paintings[0].quantity}
        price={paintings[0].price}
      />
      <Painting
        imgUrl={paintings[1].imgUrl}
        title={paintings[1].title}
        author={paintings[1].author}
        quantity={paintings[1].quantity}
        price={paintings[1].price}
      />
      <Painting
        imgUrl={paintings[2].imgUrl}
        title={paintings[2].title}
        author={paintings[2].author}
        quantity={paintings[2].quantity}
        price={paintings[2].price}
      />
      <Painting
        imgUrl={paintings[3].imgUrl}
        title={paintings[3].title}
        author={paintings[3].author}
        quantity={paintings[3].quantity}
        price={paintings[3].price}
      />
    </div>
  );
}
