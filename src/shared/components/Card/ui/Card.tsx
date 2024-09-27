import type { FC } from 'react';
import type { MarketAnalyzeProps } from '../types/types';

import styles from '../styles/style.module.css';

export const Card: FC<MarketAnalyzeProps> = ({ title, subtitle, children }) => {
	return (
		<div className={styles.container}>
			{title && <h4 className={styles.title}>{title}</h4>}
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			{children}
		</div>
	);
};
