import React, {FC} from 'react';

interface TitleProps{
	size?: string;
	color?: string;
	centered?: boolean;
	margin?: boolean;
	shadow?: boolean;
}

const Title: FC<TitleProps> = ({size = "", color = "", centered = false, margin = false, shadow = false, children}) => {

let titleClass = "title ";
let titleClassSize = " title";
let titleClassColor = " title";

 size === "xxl"		? titleClassSize += "--xxl ": "";
 size === "xl"		? titleClassSize += "--xl " : "";
 size === "lg"		? titleClassSize += "--lg "	: "";
 size === "md"		? titleClassSize += "--md "	: "";
 size === "sm"		? titleClassSize += "--sm "	: "";

 color === "white" 			? titleClassColor += "--white " 				: "";
 color === "brownDark"	?	titleClassColor += "--brown-dark " 		: "";
 color === "brownLight"	?	titleClassColor += "--brown-light "		: "";
 color === "green"			? titleClassColor += "--green "					: "";
 color === "greenDark"	? titleClassColor += "--green-dark "		: "";
 color === "greenLight"	? titleClassColor += "--green-light "		: "";
 color === "black"			? titleClassColor += "--black "					: "";

 centered === true	? titleClass += "title--centered "	: "";
 margin		=== true	? titleClass += "title--margin " 		: "";
 shadow		=== true	? titleClass += "title--shadow " 		: "";

 titleClass += titleClassSize + " " + titleClassColor;

return (
	<>
		<div data-testid="Title" className="title">
				<span className={titleClass}>{children}</span>
		</div>
	</>
)
}
export default Title;
