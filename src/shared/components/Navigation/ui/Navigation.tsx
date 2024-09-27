import type { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { navLinks } from '../mock';

import styles from '../styles/style.module.css';

export const Navigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.section}>
				<h3 className={styles.title}>Концептуальный план</h3>
				<ul className={styles.list}>
					{navLinks.map((item) => (
						<li key={item.id} className={styles.item}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									`${isActive ? styles.item__link_active : styles.item__link}`
								}>
								<div
									className={`${styles.item__icon} ${
										styles[`item__icon_type_${item.type}`]
									}`}></div>
								<p className={styles.item__text}>{item.text}</p>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
