import React from 'react';
import Title from '../../elements/Title/Title';
import Text from '../../elements/Text/Text';
import Image from '../../elements/Image/Image';
import { Parallax, Background } from 'react-parallax';

// ↓↓↓ Translator Imports
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';

const Home = () => {
	const { language } = useSelector((state: RootState) => state.lang);

	let title: string				= translate("the_roost", language);
	let description: string = translate("coffee_shop", language);

	return (
  <>
		<div>
		<Parallax bgImage="./img/fondo_medio.png" strength={500} className="c-image__parallax" bgStyle={{ "background-position": "bottom"}}>
						<div className="c-image__parallax__content">
							<img src="./img/logo-white.svg" width="200px"/>
							<Title size="xxl" color="white" margin centered shadow>{title}</Title>
							<Title size="md" color="white" centered shadow>{description}</Title>
						</div>
			</Parallax>
			<Title size="xl" color='brown' margin centered>Lorem Ipsum</Title>
			<Text backgroundColor="brownDark" >
				Lorem ipsum dolor sit amet, <strong>consectetur</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>
			<Image src="./img/slider.jpeg" width={100} height={30}></Image>
		</div>
  </>
)
}

export default Home;
