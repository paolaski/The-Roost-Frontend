
type type = 'entrant' | 'first' | 'second' | 'dessert'

export interface PlateInterface {
	name: string,
	price: number,
	type: type
}

const plate_1: PlateInterface = {
	name: 'pumpkin_bagels',
	price: 6.225,
	type: 'entrant'
}

const plate_2: PlateInterface = {
	name: 'mushroom_soup',
	price: 9.17,
	type: 'first'
}

const plate_3: PlateInterface = {
	name: 'sea_bass_with_fine_herbs',
	price: 18.776,
	type: 'second'
}

const plate_4: PlateInterface = {
	name: 'carrot_cake',
	price: 3.551,
	type: 'dessert'
}

const plate_5: PlateInterface = {
	name: 'apple_pie',
	price: 4.76,
	type: 'dessert'
}

export const PlatesList = [plate_1, plate_2, plate_3, plate_4, plate_5]

export const PlateTypes:string[] = []

PlatesList.map( plate => {

	if (PlateTypes.includes(plate.type)) return

	PlateTypes.push(plate.type)
})
