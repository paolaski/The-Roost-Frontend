type type = 'tea' |'coffee'
type coffee = 'pure' | 'blend' | 'mix'
type tea =  'green' | 'red' | 'black'

export interface ProductInterface {
	name: string,
	description: string,
	image: string,
	price: number,
	type: type,
	coffee?: coffee,
	tea?: tea
}

const product_1: ProductInterface = {
	name: 'Pure Coffee',
	description: 'This is a type of coffee A',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 27.51,
	type: 'coffee',
	coffee: 'pure'
}

const product_2: ProductInterface = {
	name: 'Blend Coffee',
	description: 'This is a type of coffee B',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 15.8318,
	type: 'coffee',
	coffee: 'blend'
}

const product_3: ProductInterface = {
	name: 'Mix Coffee',
	description: 'This is a type of coffee C',
	image: 'https://s1.eestatic.com/2017/02/13/cocinillas/cocinillas_193495389_116293001_1706x960.jpg',
	price: 11.315,
	type: 'coffee',
	coffee: 'mix'
}

const product_4: ProductInterface = {
	name: 'Green Tea',
	description: 'This is a type of tea A',
	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
	price: 19.42,
	type: 'tea',
	tea: 'green'
}

const product_5: ProductInterface = {
	name: 'Red Tea',
	description: 'This is a type of tea B',
	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
	price: 8.12,
	type: 'tea',
	tea: 'red'
}

const product_6: ProductInterface = {
	name: 'Black Tea',
	description: 'This is a type of tea C',
	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
	price: 6.97,
	type: 'tea',
	tea: 'black'
}

// const product_7: ProductInterface = {
// 	name: 'Mint Tea',
// 	description: 'This is a type of tea D',
// 	image: 'https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg',
// 	price: 11.97,
// 	type: 'tea',
// 	tea: 'green'
// }

export const ProductsList = [product_1, product_2, product_3, product_4, product_5, product_6]

export const CoffeeList: ProductInterface[] = []
export const TeaList: ProductInterface[] = []

ProductsList.map(product => {
	if (product.hasOwnProperty('coffee')) CoffeeList.push(product)

	else TeaList.push(product)
})
