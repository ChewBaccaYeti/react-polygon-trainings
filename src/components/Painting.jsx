const painting = (
    <div>
      <img src={data.url} alt={data.title} />
      <h2>{data.title}</h2>
      <p>
        Author: <a href={'data.author.url'}>{data.author.tag}</a>
      </p>
      <p>Price: {data.price} credits</p>
      <p>Quantity: {data.quantity}</p>
      <button></button>
    </div>
  );
  
  console.log(painting);
  
  function Painting() {
    return (
      <div>
        <img src={data.url} alt={data.title} />
        <h2>{data.title}</h2>
        <p>
          Author: <a href={'data.author.url'}>{data.author.tag}</a>
        </p>
        <p>Price: {data.price} credits</p>
        <p>Quantity: {data.quantity}</p>
        <button></button>
      </div>
    );
  }
  
  ReactDOM.render(painting, document.querySelector('#root'));
  
  const example = example[0];
  
  ReactDOM.render(
    <Painting
      url={example.url}
      a="x+2=5"
      b="y-3=2"
      c="z-(1+1)=3"
      d={{ e: 7 }}
      f={10}
      hint="This is props."
    />,
    document.querySelector('#root')
  );