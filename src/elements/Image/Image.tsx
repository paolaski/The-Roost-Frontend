import React, {FC} from 'react';
import { Parallax } from 'react-parallax';
import Title from '../Title/Title';

interface ImageProps{
	src?: string;
	width?: number;
	height?: number;
	radius?: boolean;
}

const Image: FC<ImageProps> = ({width, height, src, radius}) => {
	let classImage: string = "c-image";
	radius ? classImage += " c-image--border-radius" : classImage += "";

		return(
			<>
			<div className="c-image" data-testid="Image">
				<div className={classImage} style={{backgroundImage: `url(${src})`, width: width + "%", height: height + "vh"}}></div>
			</div>
			</>
		);
}

export default Image;
