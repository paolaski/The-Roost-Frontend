import React, {FC} from 'react';

interface TextProps{
	alignment?: string;
	textColor?: string;
	backgroundColor?: string;
	size?: string;
}

const Text: FC<TextProps> = ({alignment = "", textColor = "", backgroundColor = "", size = "", children}) => {
	let textClass 						= "text-container__text ";
	let textColorClass 				= " text-container__text";
	let horizontalAlignClass	= " text-container__text";
	let textSizeClass					= " text-container__text";
	let backgroundColorClass	= " text-container__text";

	size === "xxl"	? textSizeClass += "--xxl "	: " ";
	size === "xl"		? textSizeClass += "--xl " 	: " ";
	size === "lg"		? textSizeClass += "--lg "	: " ";
	size === "md"		? textSizeClass += "--md "	: " ";
	size === "sm"		? textSizeClass += "--sm "	: " ";

	textColor === "white" 			? textColorClass += "--white " 					: " ";
	textColor === "brownDark"		?	textColorClass += "--brown-dark " 		: " ";
	textColor === "brownLight"	?	textColorClass += "--brown-light "		: " ";
	textColor === "green"				? textColorClass += "--green "					: " ";
	textColor === "greenDark"		? textColorClass += "--green-dark "			: " ";
	textColor === "greenLight"	? textColorClass += "--green-light "		: " ";
	textColor === "black"				? textColorClass += "--black "					: " ";

	backgroundColor === "white" 			? backgroundColorClass += "--bg-white " 				: " ";
	backgroundColor === "brownDark"		?	backgroundColorClass += "--bg-brown-dark " 		: " ";
	backgroundColor === "brownLight"	?	backgroundColorClass += "--bg-brown-light "		: " ";
	backgroundColor === "green"				? backgroundColorClass += "--bg-green "					: " ";
	backgroundColor === "greenDark"		? backgroundColorClass += "--bg-green-dark "		: " ";
	backgroundColor === "greenLight"	? backgroundColorClass += "--bg-green-light "		: " ";
	backgroundColor === "black"				? backgroundColorClass += "--bg-black "					: " ";

	alignment === "centered"		? horizontalAlignClass += "--centered "		: " ";
	alignment === "right" 			? horizontalAlignClass += "--right "			: " ";
	alignment === "justified"	  ? horizontalAlignClass += "--justified "	: " ";

	textClass += textColorClass + textSizeClass + horizontalAlignClass + backgroundColorClass;

	return (
  <>
		<div data-testid="Text" className="text-container">
			<p className={textClass}>{children}</p>
		</div>
	</>
);
}
export default Text;
