import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

  export const Painting = ({ imgUrl = defaultImage, title, quantity, author = 'unknown', avatar, price }) => {
    return (
      <div>
        <img src={imgUrl ?? defaultImage} alt={title} width="480"/>
        <h2>{title}</h2>
        <p>
          Author: <a href={imgUrl}>{avatar},{author}</a>
        </p>
        <p>Price: {price} credits</p>
        <p>Quantity: {quantity}</p>
        <button></button>
      </div>
    );
  };

  Painting.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  export default Painting;