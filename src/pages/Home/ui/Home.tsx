import type { FC } from 'react';

import styles from '../styles/style.module.css';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>КОНЦЕПТУАЛЬНЫЙ ПРОЕКТ</h1>
			<p className={styles.subtitle}>
				основной профессиональной программы высшего образования
			</p>
			<p className={styles.subtitle}>«_______»</p>
			<p className={styles.subtitle}>
				направление подготовки 00.00.00 «_______» (уровень ________)
			</p>
		</div>
	);
};
