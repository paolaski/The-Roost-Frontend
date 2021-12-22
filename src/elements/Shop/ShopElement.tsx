import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

import { FixPrice } from '../../assets/helpers/FixPrice';
import { ProductInterface } from '../../Mockups/Products';



export const ListOfProducts = (products: ProductInterface[]) => {

	const { language } = useSelector((state: RootState) => state.lang)

	return (
		products.map((product) => (
			<div data-testid="ProductCard" className='productCard'>
				<div className="productCard__image">
					<img src={product.image} alt="placeholder" />
				</div>
				<div className="productCard__content">
					<button>{product.name}</button>
					<button>{product.coffee || product.tea}</button>
					<p className="productCard__text">{product.description}</p>
					<button>{ translate('add_to_cart', language) } { FixPrice(product.price) } €</button>
				</div>
			</div>
		))
	)
}

