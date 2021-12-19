import React, {FC} from 'react';
import internal from 'stream';

/*
	Size: lg, md, sm

*/
interface TitleProps{
	text?: string;
	size?: string;
	color?: string;
}

const Title: FC<TitleProps> = ({text, size, color}) => {
 let titleClassSize = "title";
 let titleClassColor = "title";
 let titleClass = "";

 if(size === "xl"){
		titleClassSize += "--xl";
 }else if (size === "lg"){
		titleClassSize += "--lg";
 }else if (size === "md"){
		titleClassSize += "--md";
 }else if (size === "sm"){
		titleClassSize += "--sm";
	} else{
		titleClassSize += "";
 }

 if(color === "brown"){
	titleClassColor += "--brown";
 } else if (color === "green"){
	titleClassColor += "--green";
 } else if (color === "white"){
	titleClassColor += "--white";
 } else if (color === "black"){
	titleClassColor += "--black";
 }

 else {
	titleClassColor += "";
 }

titleClass = titleClassSize + " " + titleClassColor;

return (
	<>
		<div data-testid="Title" className="title">
				<span className={titleClass}>{text}</span>
		</div>
	</>
)
}
export default Title;
