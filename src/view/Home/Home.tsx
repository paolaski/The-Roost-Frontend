import React from 'react';
import Title from '../../elements/Title/Title';
import Text from '../../elements/Text/Text';
import Image from '../../elements/Image/Image';
import { Parallax } from 'react-parallax';

// ↓↓↓ Translator Imports
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

const Home = () => {
	const { language } = useSelector((state: RootState) => state.lang);

	let title: string				= translate("coffee_shop", language);
	let description: string = translate("coffee_shop", language);

	return (
  <>
		<div>
			<Image src="./img/fondo_medio.png" height={700} title="The Roost" description="Coffee Shop" parallax logo></Image>
			<br/>
			<Text
					backgroundColor="brownDark"
					text="Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					></Text>
			<Image src="./img/slider.jpeg" width={100} height={30}></Image>
		</div>
  </>
)
}

export default Home;
