import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

  export const Painting = ({ imgUrl = defaultImage, title, quantity, author = 'unknown', avatar, price }) => {
    return (
      <div>
        <img src={imgUrl} alt={title} />
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
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    quantity: PropTypes.number,
    author: PropTypes.string,
    avatar: PropTypes.string,
    price: PropTypes.number,
  };

  export default Painting;