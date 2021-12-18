import React, { FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLanguage } from '../../store/langActions/langAction';
import { BsDot } from "react-icons/bs";
import { RiTranslate } from "react-icons/ri";


interface HeaderProps {
	fixed?: boolean;
	transparent?: boolean;
}

const LanguageSelector: FC<HeaderProps> = ({fixed, transparent}) => {
	const { language } = useSelector((state:RootState) => state.lang);
	const dispatch = useDispatch();

	const chooseLanguageHandler = (value:string) => {
		dispatch(setLanguage(value));
	}

	return(
		<>
			<div  className="lang-selector">
				<span className="lang-selector__lang-list">
					<RiTranslate className="lang-selector__icon" />
					<a className = "lang-selector__lang-list__item" onClick={() => chooseLanguageHandler('EN')}>EN</a><BsDot className="lang-selector__icon"/>				<a className = "lang-selector__lang-list__item"  onClick={() => chooseLanguageHandler('ES')}>ES</a>
				</span>
			</div>
		</>
	)
}

export default LanguageSelector;
