import React, {FC} from 'react';

interface ContainerProps{
	width?: number;
	bgColor?: string;
	radius?: boolean;
}

const Container: FC<ContainerProps> = ({width = 0, bgColor = "", radius = "", children }) => {
let containerClass = "container ";
let widthClass = " container";
let bgColorClass = " container";

radius === true ? containerClass += " container--radius " : "";
typeof width === "number" && width !== 0 ? widthClass += "--"+width.toString() : "";

bgColor === "brown"				? bgColorClass += "--brown" 				: bgColorClass = "";
bgColor === "brownDark"		? bgColorClass += "--brown-dark" 		: bgColorClass = "";
bgColor === "brownLight"	? bgColorClass += "--brown-light" 	: bgColorClass = "";
bgColor === "brownWarm" 	? bgColorClass += "--brown-warm" 		: bgColorClass = "";
bgColor === "green"				? bgColorClass += "--green" 				: bgColorClass = "";
bgColor === "greenDark"		? bgColorClass += "--green-dark" 		: bgColorClass = "";
bgColor === "greenLight"	? bgColorClass += "--green-light" 	: bgColorClass = "";
bgColor === "black"				? bgColorClass += "--black" 				: bgColorClass = "";
bgColor === "white"				? bgColorClass += "--white" 				: bgColorClass = "";

containerClass += widthClass + bgColorClass;

return(
	<>
  <div className={containerClass} data-testid="Container">
    {children}
  </div>
	</>
);
}

export default Container;
