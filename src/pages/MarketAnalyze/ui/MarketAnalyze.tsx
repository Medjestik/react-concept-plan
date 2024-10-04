import type { FC } from 'react';

import { IndicatorList } from '../../../shared/components/Indicators/ui/IndicatorList';
import { Card } from '../../../shared/components/Card/ui/Card';
import { ChartBarTemplate } from '../../../features/ChartsTemplate/ui/ChartBarTemplate';
import { ChartPieTemplate } from '../../../features/ChartsTemplate/ui/ChartPieTemplate';

import {
	experienceChartData,
	employmentChartData,
	scheduleChartData,
	indicatorData1,
	indicatorData2,
	vacanciesGraphData,
	demandGraphData,
} from '../mock/mock';

import styles from '../styles/style.module.css';

export const MarketAnalyze: FC = () => {
	return (
		<div className={styles.container}>
			<div className='row'>
				<div className='row__column_3'>
					<IndicatorList
						title={'Главные области устойчивого развития'}
						data={indicatorData1}
					/>
				</div>
				<div className='row__column_1'>
					<IndicatorList
						title={'Влияние на рынок труда'}
						data={indicatorData2}
					/>
				</div>
			</div>
			<div className='row row_mt_24'>
				<Card>
					<ChartBarTemplate
						data={vacanciesGraphData}
						title='Ведущие регионы по числу вакансий (в % и в абсолютных числах)'
						mainColor='#108DC7'
					/>
				</Card>
				<Card>
					<ChartBarTemplate
						data={demandGraphData}
						mainColor='#15678D'
						title='Годовой прирост спроса на специалистов по регионам'
						secondaryColor='#074A6A'
					/>
				</Card>
			</div>
			<div className='row row_mt_24'>
				<Card>
					<div>
						<ChartPieTemplate
							data={experienceChartData}
							title='Опыт работы'
							graphHeight={220}
						/>
					</div>
				</Card>
				<Card>
					<ChartPieTemplate
						data={employmentChartData}
						title='Тип занятости'
						graphHeight={220}
					/>
				</Card>
				<Card>
					<ChartPieTemplate
						data={scheduleChartData}
						title='График работы'
						graphHeight={220}
					/>
				</Card>
			</div>
		</div>
	);
};
