import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

import { FixPrice } from '../../assets/helpers/FixPrice';
import { PlateInterface } from '../../Mockups/Plates';


export const ListOfPlates = (plates: PlateInterface[]) => {

	const { language } = useSelector((state: RootState) => state.lang);

	return (
		plates.map((plate) => (
			<li className="menu__container-list__block">
				{ translate(plate.name, language) } <span>{ FixPrice(plate.price) }€</span>
			</li>
		))
	)
}
