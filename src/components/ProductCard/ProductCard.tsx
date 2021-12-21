import React from 'react';
// ↓↓↓ Translator Imports
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

const ProductCard = (product: any) => {

	const { language } = useSelector((state: RootState) => state.lang);
	return (
		<div data-testid="ProductCard" className='productCard'>
			<div className="productCard__image">
				<img src={product.image} alt="placeholder" />
			</div>
			<div className="productCard__content">
				<button>{product.name}</button>
				<button>{product.type}</button>
				<p className="productCard__text">{product.description}</p>
				<button>{translate('add_to_cart', language)} {product.price} €</button>
			</div>
		</div>
	)
};

export default ProductCard;
