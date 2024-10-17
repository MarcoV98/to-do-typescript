import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
	return (
		<header className="header">
			<p className="header__text">Task-Helper</p>
			<nav className="main-nav">
				<ul className="main-nav__list">
					<li className="main-nav__item">
						<NavLink to="/" className={({isActive}) => (isActive ? 'active' : undefined)} end>Your Task</NavLink>
					</li>
					<li className="main-nav__item">
						<NavLink to="/accessible" className={({isActive}) => (isActive ? 'active' : undefined)}>Accessible Text</NavLink>
					</li>
					<li className="main-nav__item">
						<NavLink to="/credits" className={({isActive}) => (isActive ? 'active' : undefined)}>Credits</NavLink>
					</li>
					<li className="main-nav__item">
						<NavLink to="/pokedex" className={({isActive}) => (isActive ? 'active' : undefined)}>Pokedex</NavLink>
					</li>

				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
