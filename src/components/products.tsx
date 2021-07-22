import React from 'react';

interface IProps {
  props: {
    id: string;
    title: string;
    image: string;
    desc: string;
    price: number;
    availableSizes: string[];
  }[];
}

const Product: React.FC<IProps> = ({ props }) => {
  const productComponents = (): JSX.Element[] => {
    return props.map(product => {
      return (
        <ul className='products'>
          <li key={product.id}>
            <div className='product'>
              <a href='/'>
                <img src={product.image} alt='product'></img>
                <p>{product.title}</p>
              </a>
              <div className='product-price'>
                <div className='product-price'>{`$${product.price}`}</div>
                <button className='button primary'>Add to card</button>
              </div>
            </div>
          </li>
        </ul>
      );
    });
  };

  return <div className='content'>{productComponents()}</div>;
};

export default Product;
