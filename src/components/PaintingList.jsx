import Painting from './Painting';

function PaintingList({ items }) {
  <ul>
    {items.map(item => (
      <li>
        <Painting
          key={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          author={item.author}
          quantity={item.quantity}
          price={item.price}
        />
      </li>
    ))}
  </ul>;
}

export default PaintingList;
