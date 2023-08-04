import { PaintingList } from 'components/PaintingList';
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
      <PaintingList items={paintings}></PaintingList>
    </div>
  );
}
