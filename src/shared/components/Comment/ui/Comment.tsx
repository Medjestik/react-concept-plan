import type { FC } from 'react';
import type { IComment } from '../types/types';

import styles from '../styles/style.module.css';

export const Comment: FC<IComment> = ({ author, text }) => {
	return (
		<div className={styles.container}>
			<div className={styles.author}>
				<img
					className={styles.img}
					src={author.img}
					alt='изображение автора'></img>
				<div className={styles.description}>
					<h4 className={styles.name}>{author.name}</h4>
					<p className={styles.job}>{author.job}</p>
				</div>
			</div>
			<p className={styles.text}>«{text}»</p>
		</div>
	);
};
