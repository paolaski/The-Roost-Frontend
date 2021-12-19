import React from 'react';

enum type {
	_1 = 'Entrant',
	_2 = 'First',
	_3 = 'Second',
	_4 = 'Dessert'
}

interface plateInterface {
	name: String,
	price: Number,
	type: type
}

const plate_1: plateInterface = {
	name: 'Pumpkin Bagels',
	price: 6.225,
	type: type._1
}

const plate_2: plateInterface = {
	name: 'Mushroom soup',
	price: 9.17,
	type: type._2
}

const plate_3: plateInterface = {
	name: 'Sea bass with fine herbs',
	price: 18.776,
	type: type._3
}

const plate_4: plateInterface = {
	name: 'Carrot Cake',
	price: 3.551,
	type: type._4
}

const Menu = () => {

	const plates = [plate_1, plate_2, plate_3, plate_4]

	const fixPrice = (price: Number) => (Math.ceil(price.valueOf() * 100) / 100).toFixed(2)

	// ↓↓↓ Entrnats
	const EntrantsPlatesList = (plates: plateInterface[]) => {
		const listEntrants = plates.map( (plate, index) => {
			if (plate.type !== 'Entrant') return

			const fixedPrice = fixPrice(plate.price).toString().replaceAll('.', ',')
			return (
					<li className="menu__container-list__block" key={ index }>
						<span>{ plate.name }</span><span>{ fixedPrice } €</span>
					</li>
			)
		})
		return (listEntrants)
	}
	// ↓↓↓ Firsts
	const FirstsPlatesList = (plates: plateInterface[]) => {
		const listFirsts = plates.map((plate, index) => {
			if (plate.type !== 'First') return

			const fixedPrice = fixPrice(plate.price).toString().replaceAll('.', ',')
			return (
				<li className="menu__container-list__block" key={index}>
					<span>{plate.name}</span><span>{fixedPrice} €</span>
				</li>
			)
		})
		return (listFirsts)
	}

	// ↓↓↓ Seconds
	const SecondsPlatesList = (plates: plateInterface[]) => {
		const listSeconds = plates.map((plate, index) => {
			if (plate.type !== 'Second') return

			const fixedPrice = fixPrice(plate.price).toString().replaceAll('.', ',')
			return (
				<li className="menu__container-list__block" key={index}>
					<span>{plate.name}</span><span>{fixedPrice} €</span>
				</li>
			)
		})
		return (listSeconds)
	}

	// ↓↓↓ Desserts
	const DessertsPlatesList = (plates: plateInterface[]) => {
		const listDesserts = plates.map((plate, index) => {
			if (plate.type !== 'Dessert') return

			const fixedPrice = fixPrice(plate.price).toString().replaceAll('.', ',')
			return (
				<li className="menu__container-list__block" key={index}>
					<span>{plate.name}</span><span>{fixedPrice} €</span>
				</li>
			)
		})
		return (listDesserts)
	}

  return (
		<>
			<div className="menu">
				<div className="banner"></div>
				<div className="menu__container">
					<h1 className="menu__container__title">Entrants</h1>
					<ul className="menu__container-list">
						{EntrantsPlatesList(plates)}
					</ul>

					<h1 className="menu__container__title">Firsts</h1>
					<ul className="menu__container-list">
						{FirstsPlatesList(plates)}
					</ul>

					<h1 className="menu__container__title">Seconds</h1>
					<ul className="menu__container-list">
						{SecondsPlatesList(plates)}
					</ul>

					<h1 className="menu__container__title">Desserts</h1>
					<ul className="menu__container-list">
						{DessertsPlatesList(plates)}
					</ul>
				</div>
			</div>
		</>
	)
};

export default Menu;
