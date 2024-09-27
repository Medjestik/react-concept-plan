import type { FC } from 'react';
import type { IIndicatorListProps, IIndicatorItemProps } from '../types/types';

import { IndicatorItem } from './IndicatorItem';

import styles from '../styles/style.module.css';

export const IndicatorList: FC<IIndicatorListProps> = ({ title, data }) => {
	return (
		<div className={styles.container}>
			{title && <h4 className={styles.title}>{title}</h4>}
			<ul className={styles.list}>
				{data.map((elem: IIndicatorItemProps, i: number) => (
					<IndicatorItem key={i} type={elem.type} text={elem.text} />
				))}
			</ul>
		</div>
	);
};
