import type { FC } from 'react';
import type { IChartPieProps } from '../types/types';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import { ChartLegendTemplate } from './ChartLegendTemplate';

import { accentColors } from '../../../shared/colors/colors';

import styles from '../styles/style.module.css';

export const ChartPieTemplate: FC<IChartPieProps> = ({
	data,
	title,
	graphHeight,
}) => {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				{title && <h4 className={styles.title}>{title}</h4>}
				<ResponsiveContainer width='100%' height={graphHeight}>
					<PieChart>
						<Pie
							data={data}
							cx='44%'
							cy='50%'
							labelLine={false}
							outerRadius={80}
							paddingAngle={5}
							fill='#8884d8'
							dataKey='value'
							stroke='#fff'
							strokeWidth={2}
							cornerRadius={10}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									cursor='pointer'
									fill={accentColors[index % accentColors.length]}
								/>
							))}
						</Pie>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</div>
			<ChartLegendTemplate
				payload={data.map((entry, index) => ({
					value: entry.name,
					color: accentColors[index % accentColors.length],
				}))}
			/>
		</div>
	);
};
