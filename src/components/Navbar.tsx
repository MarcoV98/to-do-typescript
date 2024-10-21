import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
	const { t, i18n } = useTranslation('navbar');

	const handleLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header className="header">
			<p className="header__text">Task-Helper</p>
			<nav className="main-nav">
				<ul className="main-nav__list">
					<li className="main-nav__item">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? 'active' : undefined)}
							end
						>
							{t('navLinkTasks')}
						</NavLink>
					</li>
					<li className="main-nav__item">
						<NavLink
							to="/accessible"
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							{t('navLinkAccessible')}
						</NavLink>
					</li>
					<li className="main-nav__item">
						<NavLink
							to="/credits"
							className={({ isActive }) => (isActive ? 'active' : undefined)}
						>
							{t('navLinkCredits')}
						</NavLink>
					</li>

					<li className="main-nav__item">
						<NavLink to="/pokedex" className={({isActive}) => (isActive ? 'active' : undefined)}>Pokedex</NavLink>
					</li>
					
					<li className="main-nav__item language-switcher">
						<button className='button' onClick={() => handleLanguage('en')}>Eng</button>
						<button className='button' onClick={() => handleLanguage('it')}>Ita</button>
					</li>

				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
