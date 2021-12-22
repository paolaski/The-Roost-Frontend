import React, {FC} from 'react';
import { Parallax } from 'react-parallax';
import Title from '../Title/Title';

interface ImageProps{
	src?: string;
	parallax?: boolean;
	width?: number;
	height?: number;
	title?: string;
	description?: string;
	radius?: boolean;
	logo?: boolean;
}

const Image: FC<ImageProps> = ({width, height, parallax, src, title, radius, description, logo}) => {
	let classImage: string = "c-image";
	radius ? classImage += " c-image--border-radius" : classImage += "";
	parallax ? classImage += " c-image__parallax" : classImage += " c-image__image";

	if (parallax === true){
		return(
			<>
			<Parallax bgImage={src} strength={height} className={classImage}>
						<div style={{height: height + "px"}} className="c-image__parallax__content">
							{logo ? <img src="./img/logo-white.svg" width="200px"/> : ""}
							{title != "" ? <Title size="xxl" color="white" text={title} centered shadow></Title> : ""}
							{description != "" ? <Title size="md" color="white" text={description} centered shadow></Title> : ""}
						</div>
			</Parallax>
			</>
		);
	}
	else {
		return(
			<>
			<div className="c-image" data-testid="Image">
				<div className={classImage} style={{backgroundImage: `url(${src})`, width: width + "%", height: height + "vh"}}></div>
			</div>
			</>
		);
	}
}

export default Image;
