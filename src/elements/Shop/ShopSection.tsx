import {  CoffeeList, TeaList  } from '../../Mockups/Products';
import { ListOfProducts } from './ShopElement';

export const SectionsOfProducts = () => {

	return (
		<>
			<h1>Coffees</h1>
			<div className="product__container-list">
				{ListOfProducts(CoffeeList)}
			</div>
			<h1>Teas</h1>
			<div className="product__container-list">
				{ListOfProducts(TeaList)}
			</div>
		</>
	)
}

