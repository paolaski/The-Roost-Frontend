import React, {FC} from 'react';

interface TextProps{
	text?: string;
	alignment?: string;
	textColor?: string;
	backgroundColor?: string;
	size?: string;
}

const Text: FC<TextProps> = ({text, alignment, textColor, backgroundColor, size}) => {
	let textClass = "text-container__text ";
	let textColorClass = "text-container__text";
	let horizontalAlignClass = "text-container__text";
	let textSizeClass = "text-container__text";
	let backgroundColorClass = "text-container__text";

	if(size === "xxl"){
		textSizeClass += "--xxl ";
 } else if(size === "xl"){
		textSizeClass += "--xl ";
} else if (size === "lg"){
		textSizeClass += "--lg ";
 }else if (size === "md"){
		textSizeClass += "--md ";
 }else if (size === "sm"){
		textSizeClass += "--sm ";
	} else{
		textSizeClass += " ";
 }

	if(textColor === "white"){
		textColorClass += "--white ";
	}else if(textColor === "brownDark"){
		textColorClass += "--brown-dark ";
	}else if(textColor === "brownLight"){
		textColorClass += "--brown-light ";
	}else if(textColor === "green"){
		textColorClass += "--green ";
	}else if(textColor === "greenDark"){
		textColorClass += "--green-dark ";
	}else if(textColor === "greenLight"){
		textColorClass += "--green-light ";
	}else if(textColor === "black"){
		textColorClass += "--black ";
	}else{
		textColorClass = " ";
	}

	if(backgroundColor === "brownDark"){
		backgroundColorClass += "--bg-brown-dark ";
	}else if(backgroundColor === "brownLight"){
		backgroundColorClass += "--bg-brown-light ";
	}else if(backgroundColor === "green"){
		backgroundColorClass += "--bg-green ";
	}else if(backgroundColor === "greenDark"){
		backgroundColorClass += "--bg-green-dark ";
	}else if(backgroundColor === "greenLight"){
		backgroundColorClass += "--bg-green-light ";
	}else if(backgroundColor === "black"){
		backgroundColorClass += "--bg-black ";
	}else{
		backgroundColorClass = " ";
	}

	if (alignment === "centered"){
		horizontalAlignClass += "--centered ";
	}else if (alignment === "right"){
		horizontalAlignClass += "--right ";
	}else if (alignment === "justified"){
		horizontalAlignClass += "--justified ";
	}else{
		horizontalAlignClass = " ";
	}

	textClass = textColorClass + textSizeClass + horizontalAlignClass + backgroundColorClass;

	return (
  <>
		<div data-testid="Text" className="text-container">
			<p className={textClass}>{text}</p>
		</div>
	</>
);
}
export default Text;
