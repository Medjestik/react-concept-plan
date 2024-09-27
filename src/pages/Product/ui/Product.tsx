import type { FC } from 'react';

import { products } from '../mock/mock';

import styles from '../styles/style.module.css';

export const Product: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Продукты, к созданию которых готовятся выпускники образовательной
				программы
			</h2>
			<ul className={styles.list}>
				{
					products.map((elem, i) => (
						<li key={i} className={styles.item}>
							<div className={styles.icon}></div>
							<div className={styles.title}>{elem.title}</div>
							<div className={styles.count}>{elem.nsiCount} НСИ</div>
						</li>
					))
				}
			</ul>
		</div>
	);
};
