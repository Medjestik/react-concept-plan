import type { FC } from 'react';
import type { IChartBarProps } from '../types/types';
import {
	BarChart,
	Bar,
	Cell,
	LabelList,
	ResponsiveContainer,
	XAxis,
} from 'recharts';

import styles from '../styles/style.module.css';

const formatName = (name: string) => {
	if (name.length > 10) {
		return `${name.substring(0, 10)}...`;
	}
	return name;
};

export const ChartBarTemplate: FC<IChartBarProps> = ({
	data,
	title,
	mainColor,
	secondaryColor = '#FF6B6B',
}) => {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				{title && <h4 className={styles.title}>{title}</h4>}
				<ResponsiveContainer width='100%' height={220}>
					<BarChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 40,
						}}>
						<XAxis
							dataKey='name'
							tick={{ fontSize: 12, fill: '#000' }}
							interval={0}
							angle={0}
							dy={4}
							axisLine={false}
							tickLine={false}
							tickFormatter={formatName}
						/>
						<Bar dataKey='value' radius={12}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.value > 0 ? mainColor : secondaryColor}
								/>
							))}
							<LabelList
								fontSize={12}
								dataKey='value'
								position='inside'
								fill='#fff'
								formatter={(value: number) => `${value}%`}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
