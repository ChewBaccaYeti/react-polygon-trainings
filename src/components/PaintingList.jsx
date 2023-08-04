import Painting from './Painting';


// const PaintingList = () => {};

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imgUrl={item.imgUrl}
            title={item.title}
            author={item.author}
            quantity={item.quantity}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
