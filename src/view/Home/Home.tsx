import React from 'react';
import Title from '../../elements/Title/Title';
import Image from '../../elements/Image/Image';
import { Parallax } from 'react-parallax';

const Home = () => {

	let foto = './img/fondo_detalle.png';

	return (
  <>
		<div>
    	<Title size="xl" color="brown" text="Home Component" margin></Title>

			<Image src="./img/fondo.png" height={400} title="The Roost" description="Coffee Shop" parallax></Image>
		</div>
  </>
)
}

export default Home;
