import type { FC } from 'react';

import { Navigation } from '../../../shared/components/Navigation/ui/Navigation';

import styles from '../styles/style.module.css';

export const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.header}>
				<div className={styles.header__logo}></div>
			</div>
			<Navigation />
		</div>
	);
};
