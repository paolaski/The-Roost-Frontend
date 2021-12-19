import React, {FC} from 'react';

interface TitleProps{
	text?: string;
	size?: string;
	color?: string;
	centered?: boolean;
	margin?: boolean;
	shadow?: boolean;
}

const Title: FC<TitleProps> = ({text, size, color, centered, margin, shadow}) => {
 let titleClassSize = "title";
 let titleClassColor = "title";
 let titleClass = "title ";

 if(size === "xxl"){
		titleClassSize += "--xxl";
 } else if(size === "xl"){
	titleClassSize += "--xl";
} else if (size === "lg"){
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
 } else {
	titleClassColor += "";
 }

 if(centered){
	titleClass += "title--centered ";
 }

 if(margin){
	titleClass += "title--margin ";
 }

 if(shadow){
	titleClass += "title--shadow ";
 }

titleClass += titleClassSize + " " + titleClassColor;

return (
	<>
		<div data-testid="Title" className="title">
				<span className={titleClass}>{text}</span>
		</div>
	</>
)
}
export default Title;
