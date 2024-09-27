import type { FC } from 'react';

interface ILegendItem {
	value: string;
	color: string;
}

interface IChartLegendProps {
	payload: ILegendItem[];
}

import styles from '../styles/legend.module.css';

export const ChartLegendTemplate: FC<IChartLegendProps> = ({ payload }) => {
	return (
		<ul className={styles.list}>
			{payload.map((item: ILegendItem, index: number) => (
				<li key={index} className={styles.item}>
					<div
						className={styles.round}
						style={{ backgroundColor: item.color }}></div>
					<span className={styles.text}>{item.value}</span>
				</li>
			))}
		</ul>
	);
};
