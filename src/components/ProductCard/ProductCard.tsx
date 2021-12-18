import React from 'react';

const ProductCard = (product: any) => (
  <div className='productCard'>
		<div className="productCard__image">
			<img src={product.image} alt="placeholder" />
		</div>
		<div className="productCard__content">
			<button>{product.name}</button>
			<button>{product.type}</button>
			<p className="productCard__text">{product.description}</p>
			<button>Add to Cart {product.price}€</button>
		</div>
  </div>
);

export default ProductCard;
