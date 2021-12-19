import React from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { RootState } from '../../store';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { RiTwitterFill, RiInstagramFill, RiFacebookCircleFill, RiRedditFill    } from "react-icons/ri";
import { BsTriangleFill } from "react-icons/bs";

const Footer = () => {
	const { language } = useSelector((state: RootState) => state.lang);

return (
  <div data-testid="Footer" >
		<div className="triangle">
			<BsTriangleFill className="triangle__icon"/>
		</div>
		<div className="footer">
  	<div className="footer__section footer__section--1">
					<div className="footer__section__content">
					<a href="/about" className="footer__section__content__item">{translate('about', language)}</a>
					<a href="/profile" className="footer__section__content__item">{translate('profile', language)}</a>
					<a href="/shop" className="footer__section__content__item">{translate('shop', language)}</a>
					<a href="/reservations" className="footer__section__content__item">{translate('reservation', language)}</a>
		</div>
		</div>
		<div className="footer__section footer__section--2">
			<div className="footer__section__content">
				<a href="/legal" className="footer__section__content__item">{translate('terms', language)}</a>
				<a href="/privacy" className="footer__section__content__item">{translate('privacy', language)}</a>
				<a href="/cookies" className="footer__section__content__item">{translate('cookies', language)}</a>
				<a href="/faq" className="footer__section__content__item">{translate('FAQ', language)}</a>
			</div>
		</div>
		<div className="footer__section  footer__section--3"></div>
		<div className="footer__section  footer__section--4"></div>
		<div className="footer__section  footer__section--5">
			<div className="footer__section__content">
				<p className="footer__section__content__item">Síguenos en redes</p>
				<div className="social-media">
					<a target="_blank" href="https://twitter.com/animalcrossing" className="footer__section__content__item social-media__icon"><RiTwitterFill/></a>
					<a target="_blank" href="https://www.instagram.com/animalcrossing_official/" className="footer__section__content__item social-media__icon"><RiInstagramFill/></a>
					<a target="_blank" href="https://www.facebook.com/AnimalCrossingES/" className="footer__section__content__item social-media__icon"><RiFacebookCircleFill/></a>
					<a target="_blank" href="https://www.reddit.com/r/AnimalCrossing/" className="footer__section__content__item social-media__icon"><RiRedditFill/></a>
				</div>
			</div>
		</div>
  </div>
	</div>
);
}
export default Footer;
