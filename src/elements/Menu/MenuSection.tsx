import { PlatesList, PlateTypes } from '../../Mockups/Plates'
import { ListOfPlates } from './MenuElement';

export const SectionsOfPlates = () => {

	return (
		PlateTypes.map(type => {

			const platesSection = PlatesList.filter((plate) => (plate.type === type))

			if (platesSection.length !== 0) return (

				<div key={type}>
					<h1 className="menu__container__title">{type}</h1>
					<ul className="menu__container-list">
						{ListOfPlates(platesSection)}
					</ul>
				</div>

			)
		})
	)
}
