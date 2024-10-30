import type { FC } from 'react';

import styles from '../styles/style.module.css';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.background}></div>
			<div className={styles.description}>
				<h1 className={styles.title}>КОНЦЕПТУАЛЬНЫЙ ПРОЕКТ</h1>
				<p className={styles.subtitle}>
					основной профессиональной образовательной программы высшего
					образования
				</p>
				<p
					className={`${styles.subtitle} ${styles.subtitle_color} ${styles.subtitle_bold}`}>
					«УСТОЙЧИВОЕ РАЗВИТИЕ В ТРАНСПОРТНОЙ ОТРАСЛИ»
				</p>
				<p className={styles.subtitle}>
					направление подготовки <br></br>20.03.01 Техносферная безопасность
					(уровень бакалавриата)
				</p>
			</div>
		</div>
	);
};
