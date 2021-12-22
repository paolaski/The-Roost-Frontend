import React from 'react';
import { SectionsOfProducts } from '../../elements/Shop/ShopSection';

const Shop = () =>  (

	<div data-testid="Shop">
		<div className="banner"></div>
		<main className="shop-container">
			<div className="shop-container__display">
					{ SectionsOfProducts() }
			</div>
		</main>
	</div>

)

export default Shop;
