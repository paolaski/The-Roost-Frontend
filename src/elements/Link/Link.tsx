import React, {FC} from 'react';

interface LinkProps{
	hrefTo?: string | number;
	description?: string;
	refTo?: string;
	color?: string;
}

const Link: FC<LinkProps> = ({hrefTo = "", description = "", refTo = "", color = "", children}) => {
	let finalHref = "";
	let linkClass = "link ";

	if (typeof hrefTo == "number" && refTo === "tel"){
		finalHref = "tel:" + hrefTo;
	} else if (typeof hrefTo == "string" && refTo === "mailto"){
		finalHref = "mailto:" + hrefTo;
		if(description !== ""){
			let descriptionFinal = "?Subject=" + description?.trim().replaceAll(" ","%20");
			finalHref += descriptionFinal;
		}
	} else {
		finalHref += hrefTo;
	}

	color === "black" 	? linkClass += " link--black" : "";
	color === "brown" 	? linkClass += " link--brown" : "";
	color === "green" 	? linkClass += " link--green" : "";

	linkClass += color;

	return (
	<>
		<a className={linkClass} data-testid="Link" href={finalHref}>
			{children}
		</a>
	</>
	);
}
export default Link;
