import React, { useCallback, useState, useEffect, useRef, FC} from 'react';
import { NavLink, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { setLanguage } from '../../store/langActions/langAction';
import { translate } from '../../i18n';

interface HeaderProps {
	fixed?: boolean;
	transparent?: boolean;
}

const LanguageSelector: FC<HeaderProps> = ({fixed, transparent}) => {
	const {} = useSelector((state:RootState) => state.lang);
	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown ] = useState(false);
	const dropdownEl = useRef<HTMLUListElement>(null);

	let langSelectorClass = 'lang-selector';

	if(fixed){
		langSelectorClass += ' langSelector--fixed';
	}

	if(transparent){
		langSelectorClass += ' langSelector--transparent';
	}

	const handleClickOutside = useCallBack((e) => {
		if(showDropdown && e.target.closest('.dropdown') != dropdownEl.current){
			setShowDropdown(false);
		}
	}, [showDropdown, setShowDropdown, dropdownEl]);
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [handleClickOutside]);

	const chooseLanguageHandler = (value:string) => {
		setShowDropdown(false);
		dispatch(setLanguage(value));
	}

	return(
		<LanguageSelector data-testid="LanguageSelector" className={langSelectorClass}>
			<div className="nav-lang">
				<p className="selected" onClick={() => setShowDropdown(true)}>{language}</p>
				{showDropdown && <ul className="lang-dropdown" ref={dropdownEl}>
					<li onClick={() => chooseLanguageHandler('EN')}>EN</li>
					<li onClick={() => chooseLanguageHandler('ES')}>ES</li>
				</ul>}
			</div>
		</LanguageSelector>
	)
}

export default LanguageSelector;
