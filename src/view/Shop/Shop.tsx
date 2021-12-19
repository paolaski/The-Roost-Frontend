import React from 'react';
import { Link } from 'react-router-dom'
// ↓↓↓ Components Imports
import ProductCard from '../../components/ProductCard/ProductCard'

// ↓↓↓ Interface to mock products
enum coffee {
	_1 = 'Pure',
	_2 = 'Blend',
	_3 = 'Mix' }

enum tea {
	_1 = 'Green',
	_2 = 'Red',
	_3 = 'Black'
}

interface productInterface {
	name: String,
	description: String,
	image: String,
	price: Number,
	coffee?: coffee,
	tea?: tea
}

// ↓↓↓ Mocks
const product_1: productInterface = {
	name: 'Pure Coffee',
	description: 'This is a type of coffee A',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 27.51,
	coffee: coffee._1
}

const product_2: productInterface = {
	name: 'Blend Coffee',
	description: 'This is a type of coffee B',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 15.8318,
	coffee: coffee._2
}

const product_3: productInterface = {
	name: 'Mix Coffee',
	description: 'This is a type of coffee C',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 11.315,
	coffee: coffee._3
}

const product_4: productInterface = {
	name: 'Green Tea',
	description: 'This is a type of tea A',
	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
	price: 19.42,
	tea: tea._1
}

const product_5: productInterface = {
	name: 'Red Tea',
	description: 'This is a type of tea B',
	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
	price: 8.12,
	tea: tea._2
}

// ↓↓↓ View
const Shop = () => {

	const products = [product_1, product_2, product_3, product_4, product_5]

	// ↓↓↓ To set prices on right value to public
	const fixPrice = (price: Number) => (Math.ceil(price.valueOf() * 100) / 100).toFixed(2)

	const ProductList = (products: productInterface[]) => {

		const listProducts = products.map( (product, index) => {

			// ↓↓↓ To set prices on right format to public
			const fixedPrice = fixPrice(product.price).toString().replaceAll('.', ',')

			return (
				<ProductCard
					key={ index }
					image={ product.image }
					name={ product.name }
					description={ product.description }
					price={ fixedPrice }
					type={ product.coffee ? product.coffee : product.tea }
				/>
			)
		})

		return (listProducts)
	}
	return (
		<>
			<div className="banner"></div>
			<main className="shop-container">
				<div className="shop-container__display">
					{ ProductList(products) }
				</div>
			</main>
		</>
	);
}

export default Shop;
