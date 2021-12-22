import React from 'react';
import { SectionsOfPlates } from '../../elements/Menu/MenuSection';


const Menu = () => (

	<div data-testid="Menu">
		<div className="banner"></div>
		<div className="menu">
			<div className="menu__container">
				{ SectionsOfPlates() }
			</div>
		</div>
	</div>

)

export default Menu;
