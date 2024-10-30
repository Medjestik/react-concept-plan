import type { FC } from 'react';

import styles from '../styles/style.module.css';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.background}></div>
			<div className={styles.description}>
				<h1 className={styles.title}>КОНЦЕПТУАЛЬНЫЙ ПРОЕКТ</h1>
				<p className={styles.subtitle}>
					основной профессиональной программы высшего образования
				</p>
				<p
					className={`${styles.subtitle} ${styles.subtitle_color} ${styles.subtitle_bold}`}>
					«Устойчивое развитие в транспортной отрасли»
				</p>
				<p className={styles.subtitle}>
					направление подготовки 20.03.01 <br></br>«Техносферная безопасность»
					(уровень бакалавриат)
				</p>
			</div>
		</div>
	);
};
