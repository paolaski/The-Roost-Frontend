import React, { useState, Fragment, FC } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// ↓↓↓ Translator Imports
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { translate } from '../../i18n';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
// ↓↓↓ Icons Imports
import { RiHomeHeartFill, RiShoppingBag3Fill } from "react-icons/ri";
import { RiBookMarkFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Coffee } from 'tabler-icons-react';

const Header = () => {
	const { language } = useSelector((state: RootState) => state.lang);

	let view = 0
	if (window.location.pathname == '/profile') view = 5
	else if (window.location.pathname == '/reservations') view = 4
	else if (window.location.pathname == '/menu') view = 3
	else if (window.location.pathname == '/shop') view = 2
	else view = 1

	const [currentLink, setCurrentLink] = useState<number>(view)
	const manageClick = (id: number) => () => {
		setCurrentLink(id)
	}

	return (
		<div data-testid="Header">
			<header className="header">
				<nav className="header__menu">
					<ul className='header__menu__list'>
						<li className={currentLink == 1 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(1)}>
							<Link className="header__menu__list-item-link" to="/">
								<span className="header__menu__list-item-link__icon"><RiHomeHeartFill /></span>
								<span className="header__menu__list-item-link__text">{translate('home', language)}</span>
							</Link>
						</li>
						<li className={currentLink == 2 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(2)}>
							<Link className="header__menu__list-item-link" to="/shop">
								<span className="header__menu__list-item-link__icon"><RiShoppingBag3Fill size={30}/></span>
								<span className="header__menu__list-item-link__text">{translate('shop', language)}</span>
							</Link>
						</li>
						<li className={currentLink == 3 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(3)}>
							<Link className="header__menu__list-item-link" to="/menu">
								<span className="header__menu__list-item-link__icon"><Coffee size={34}/></span>
								<span className="header__menu__list-item-link__text">{translate('menu', language)}</span>
							</Link>
						</li>
						<li className={currentLink == 4 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(4)}>
							<Link className="header__menu__list-item-link" to="/reservations">
								<span className="header__menu__list-item-link__icon"><RiBookMarkFill size={32}/></span>
								<span className="header__menu__list-item-link__text">{translate('reservation', language)}</span>
							</Link>
						</li>
						<li className={currentLink == 5 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(5)}>
							<Link className="header__menu__list-item-link" to="/profile">
								<span className="header__menu__list-item-link__icon"><FaUser size={28}/></span>
								<span className="header__menu__list-item-link__text">{translate('profile', language)}</span>
							</Link>
						</li>
						<div className="header__menu__list-indicator"></div>
					</ul>
				</nav>
				<div className="header__lang-selector"></div>
			</header>
			<LanguageSelector></LanguageSelector>
		</div>
	)
}


export default Header;
