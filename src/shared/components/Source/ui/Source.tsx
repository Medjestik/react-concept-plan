import type { FC } from 'react';
import type { ISourceProps } from '../types/types';

import styles from '../styles/style.module.css';

export const Source: FC<ISourceProps> = ({ text, url, icon }) => {
	return (
		<div className={styles.container}>
			<img className={styles.icon} src={icon} alt='иконка источника'></img>
			<a className={styles.link} href={url} target='_blank' rel='noreferrer'>
				{text}
			</a>
		</div>
	);
};
