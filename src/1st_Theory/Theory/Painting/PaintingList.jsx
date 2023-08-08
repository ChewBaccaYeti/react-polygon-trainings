import Painting from './Painting/Painting';
import PropTypes from 'prop-types';

// const PaintingList = () => {};

export function PaintingList({ items }) {
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

// Передача типов пропсов, а именно массива объектов из базы данных.
// Вместо того чтобы описывать каждый из пропсов,
// а точнее его типы, Я опишу весь массив используя метод .shape
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
