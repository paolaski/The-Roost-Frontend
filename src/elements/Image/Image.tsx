import React, {FC} from 'react';
import { Parallax } from 'react-parallax';
import Title from '../Title/Title';

interface ImageProps{
	src?: string;
	parallax?: boolean;
	width?: string;
	height?: number;
	alt?: string;
	title?: string;
	description?: string;
	radius?: boolean;
}

const Image: FC<ImageProps> = ({width, height, alt, parallax, src, title, radius, description}) => {
	let classImage: string = "c-image";
	radius ? classImage += " c-image--border-radius" : classImage += "";
	parallax ? classImage += " c-image__parallax" : classImage += " c-image__image";

	if (parallax === true){
		return(
			<>
			<Parallax bgImage={src} strength={height} className={classImage}>
						<div style={{height: height + "px"}} className="c-image__parallax__content">
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
			<div className="c-image">
				<img data-testid="Image" width={width} height={height} srcSet={src} alt={alt} className={classImage}/>
			</div>
			</>
		);
	}
}

export default Image;
