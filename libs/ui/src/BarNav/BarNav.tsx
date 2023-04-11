import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './BarNav.module.scss';

interface NavItem {
	label: string;
	link: string;
}

interface BarNavProps {
	navItems: NavItem[];
}

export const BarNav: FC<BarNavProps> = ({ navItems }) => {
	return (
		<nav className={styles['navigation-main']}>
			<ul className={styles['navigation-list']}>
				{navItems.map((item) => (
					<li key={item.link}>
						<NavLink to={item.link}>{item.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
