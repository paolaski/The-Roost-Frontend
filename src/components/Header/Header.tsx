import React, { useState } from 'react';
import { RiHomeHeartFill, RiShoppingBag3Fill } from "react-icons/ri";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GiCoffeePot } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

const Header = () => {
	let view = 0
	if (window.location.pathname == '/') view = 1
	else if (window.location.pathname == '/profile') view = 5
	const [currentLink, setCurrentLink] = useState<number>(view)
	const manageClick = (id: number) => () => {
		setCurrentLink(id)
	}

	return (
		<header className="header">
			<nav className="header__menu">
				<ul className='header__menu__list'>
					<li className={currentLink == 1 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(1)}>
						<NavLink className="header__menu__list-item-link" href="/">
							<span className="header__menu__list-item-link__icon"><RiHomeHeartFill /></span>
							<span className="header__menu__list-item-link__text">Home</span>
						</NavLink>
					</li>
					<li className={currentLink == 2 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(2)}>
						<NavLink className="header__menu__list-item-link" href="#">
							<span className="header__menu__list-item-link__icon"><RiShoppingBag3Fill /></span>
							<span className="header__menu__list-item-link__text">Shop</span>
						</NavLink>
					</li>
					<li className={currentLink == 3 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(3)}>
						<NavLink className="header__menu__list-item-link" href="#">
							<span className="header__menu__list-item-link__icon"><GiCoffeePot /></span>
							<span className="header__menu__list-item-link__text">Menu</span>
						</NavLink>
					</li>
					<li className={currentLink == 4 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(4)}>
						<NavLink className="header__menu__list-item-link" href="#">
							<span className="header__menu__list-item-link__icon"><BsBookmarkPlusFill /></span>
							<span className="header__menu__list-item-link__text">Reservation</span>
						</NavLink>
					</li>
					<li className={currentLink == 5 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(5)}>
						<NavLink className="header__menu__list-item-link" href="/profile">
							<span className="header__menu__list-item-link__icon"><FaUser /></span>
							<span className="header__menu__list-item-link__text">Profile</span>
						</NavLink>
					</li>
					<div className="header__menu__list-indicator"></div>
				</ul>
			</nav>
		</header>
	)
}


export default Header;
