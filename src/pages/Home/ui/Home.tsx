import type { FC } from 'react';

import { team } from '../mock/mock';

import styles from '../styles/style.module.css';

export const Home: FC = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>КОНЦЕПТУАЛЬНЫЙ ПРОЕКТ</h1>
			<p className={styles.subtitle}>
				основной профессиональной программы высшего образования
			</p>
			<p className={`${styles.subtitle} ${styles.subtitle_color}`}>
				«Устойчивое развитие в транспортной отрасли»
			</p>
			<p className={styles.subtitle}>
				направление подготовки 20.03.01 «Техносферная безопасность» (уровень
				бакалавриат)
			</p>
			<h4 className={styles.list_title}>Команда проектирования</h4>
			<ul className={styles.list}>
				{team.map((elem) => (
					<li className={styles.list_item} key={elem.id}>
						<span className={styles.item_tag}>{elem.tag}</span>
						{elem.img ? (
							<img
								className={styles.item_img}
								src={elem.img}
								alt='изображение участника'></img>
						) : (
							<div className={styles.item_img_stub}></div>
						)}
						<h6 className={styles.item_name}>{elem.name}</h6>
						<p className={styles.item_job}>{elem.job}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
