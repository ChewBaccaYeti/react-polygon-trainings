// const painting = (
//     <div>
//       <img src={data.url} alt={data.title} />
//       <h2>{data.title}</h2>
//       <p>
//         Author: <a href={'data.author.url'}>{data.author.tag}</a>
//       </p>
//       <p>Price: {data.price} credits</p>
//       <p>Quantity: {data.quantity}</p>
//       <button></button>
//     </div>
//   );
  
//   console.log(painting);
  
//   function Painting() {
//     return (
//       <div>
//         <img src={data.url} alt={data.title} />
//         <h2>{data.title}</h2>
//         <p>
//           Author: <a href={'data.author.url'}>{data.author.tag}</a>
//         </p>
//         <p>Price: {data.price} credits</p>
//         <p>Quantity: {data.quantity}</p>
//         <button></button>
//       </div>
//     );
//   }
  
//   ReactDOM.render(painting, document.querySelector('#root'));
  
//   const example = example[0];
  
//   ReactDOM.render(
//     <Painting
//       url={example.url}
//       a="x+2=5"
//       b="y-3=2"
//       c="z-(1+1)=3"
//       d={{ e: 7 }}
//       f={10}
//       hint="This is props."
//     />,
//     document.querySelector('#root')
//   );

import defaultImage from './default.jpg';

  export const Painting = ({ imgUrl, title, quantity, author, avatar, price }) {
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

  export default Painting;