const element = React.createElement('div', {
    class: 'container',
    b: 6,
    children: ['Hello', ' ', 'world!'],
  });
  
  console.log(element);
  
  const elem1 = <span>Hello</span>;
  const elem2 = <span>worl!</span>;
  
  const jsxElement = (
    <div>
      {elem1}
      {elem2}
    </div>
  );
  
  console.log(jsxElement);
  
  const data = {
    id: 'id-1',
    url: 'https://th.bing.com/th/id/OIP.Cjyp9AlTcUBchCGGUfiAEQAAAA?pid=ImgDet&rs=1',
    title: 'Me and the boys',
    price: 'worthless',
    author: {
      tag: 'gotyou',
      url: 'https://nhentai.net/g/461199/3/',
    },
    quantity: 10,
  };