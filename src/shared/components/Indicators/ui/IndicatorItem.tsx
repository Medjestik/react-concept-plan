import type { FC } from 'react';
import type { IIndicatorItemProps } from '../types/types';

import { Card } from '../../Card/ui/Card';

import styles from '../styles/style.module.css';

export const IndicatorItem: FC<IIndicatorItemProps> = ({ type, text }) => {
	return (
		<Card>
			<div className={styles.indicator}>
				<div className={`${styles.icon} ${styles[`icon_type_${type}`]}`}></div>
				<div className={styles.text__container}>
					{type === 'demand' && <span className={styles.count}>+20%</span>}
					<p className={styles.text}>{text}</p>
				</div>
			</div>
		</Card>
	);
};
