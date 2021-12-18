import React, { useState } from 'react';
import { RiHomeHeartFill, RiShoppingBag3Fill } from "react-icons/ri";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GiCoffeePot } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Header = () => {

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
			<header className="header">
				<nav className="header__menu">
					<ul className='header__menu__list'>
						<li className={currentLink == 1 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(1)}>
							<Link className="header__menu__list-item-link" to="/">
								<span className="header__menu__list-item-link__icon"><RiHomeHeartFill /></span>
								<span className="header__menu__list-item-link__text">Home</span>
							</Link>
						</li>
						<li className={currentLink == 2 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(2)}>
							<Link className="header__menu__list-item-link" to="/shop">
								<span className="header__menu__list-item-link__icon"><RiShoppingBag3Fill /></span>
								<span className="header__menu__list-item-link__text">Shop</span>
							</Link>
						</li>
						<li className={currentLink == 3 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(3)}>
							<Link className="header__menu__list-item-link" to="/menu">
								<span className="header__menu__list-item-link__icon"><GiCoffeePot /></span>
								<span className="header__menu__list-item-link__text">Menu</span>
							</Link>
						</li>
						<li className={currentLink == 4 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(4)}>
							<Link className="header__menu__list-item-link" to="/reservations">
								<span className="header__menu__list-item-link__icon"><BsBookmarkPlusFill /></span>
								<span className="header__menu__list-item-link__text">Reservation</span>
							</Link>
						</li>
						<li className={currentLink == 5 ? 'header__menu__list-item header__menu__list-item--active' : 'header__menu__list-item'} onClick={manageClick(5)}>
							<Link className="header__menu__list-item-link" to="/profile">
								<span className="header__menu__list-item-link__icon"><FaUser /></span>
								<span className="header__menu__list-item-link__text">Profile</span>
							</Link>
						</li>
						<div className="header__menu__list-indicator"></div>
					</ul>
				</nav>
			</header>
	)
}


export default Header;
