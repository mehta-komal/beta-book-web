import React from 'react';
import { myDatabase } from '../firebase';
const Card = () => {
  const [productsData, setProductsData] = React.useState([]);
  React.useEffect(function () {
    myDatabase.collection('products').onSnapshot(function (snapshot) {
      setProductsData(
        snapshot.docs.map(function (i) {
          return i.data();
        })
      );
    });
  });
  return (
    <div>
      {productsData.map(function (i) {
        return (
          <div key={i.slno} className='card' style={{ width: '18rem;' }}>
            <img src={i.imageUrl} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{i.name}</h5>
              <p className='card-text'>
               {i.description}
              </p>
              <del><h5 className='card-title'>{i.originalPrice}</h5></del>
              <h5 className='card-title'>{i.discountedPrice}</h5>
              <a href='#' className='btn btn-primary'>
                Add to Cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
