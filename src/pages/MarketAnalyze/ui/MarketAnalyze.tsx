import type { FC } from 'react';

import { IndicatorList } from '../../../shared/components/Indicators/ui/IndicatorList';
import { Card } from '../../../shared/components/Card/ui/Card';
import { ChartBarTemplate } from '../../../features/ChartsTemplate/ui/ChartBarTemplate';
import { ChartPieTemplate } from '../../../features/ChartsTemplate/ui/ChartPieTemplate';
import { Source } from '../../../shared/components/Source/ui/Source';
import { Comment } from '../../../shared/components/Comment/ui/Comment';

import {
	experienceChartData,
	employmentChartData,
	scheduleChartData,
	indicatorData1,
	indicatorData2,
	vacanciesGraphData,
	demandGraphData,
} from '../mock/mock';

import source1 from '../../../shared/icons/source/source1.svg';
import source2 from '../../../shared/icons/source/source2.svg';
import comment1 from '../../../shared/icons/comment/comment1.svg';
import comment2 from '../../../shared/icons/comment/comment2.svg';
import comment3 from '../../../shared/icons/comment/comment3.svg';

import styles from '../styles/style.module.css';

const commentData1 = {
	author: {
		name: 'Андрей Шаронов',
		job: 'генеральный директор Национального ESG Альянса',
		img: comment1,
	},
	text: 'Доклад является итогом масштабной работы, которая будет интересна как академическому сообществу, так и бизнесу. Бизнес можно справедливо назвать одним из главных инициаторов развития ESG-образования в России.',
};

const commentData2 = {
	author: {
		name: 'Анна Веселова',
		job: 'доцент Высшей школы бизнеса НИУ ВШЭ',
		img: comment2,
	},
	text: 'Фрагментарные знания по проблематике устойчивого развития и ESG не позволят управленцам строить ответственный и устойчивый бизнес. Образование требует системного подхода для формирования ответственного образа мышления.',
};

const commentData3 = {
	author: {
		name: 'Ксения Топоркова',
		job: 'менеджер по устойчивому развитию VK',
		img: comment3,
	},
	text: 'Образовательные программы должны отвечать как краткосрочным запросам бизнеса, так и долгосрочным стратегическим целям устойчивого развития.',
};

export const MarketAnalyze: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.spyrale}></div>
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
			<h2 className='row__title row__title_mt_40'>
				Спрос на специалистов по регионам
			</h2>
			<div className='row row_mt_12'>
				<Card>
					<ChartBarTemplate
						data={vacanciesGraphData}
						title='Ведущие регионы по числу вакансий (в % и в абсолютных числах)'
						mainColor='#435498'
					/>
				</Card>
				<Card>
					<ChartBarTemplate
						data={demandGraphData}
						title='Годовой прирост спроса на специалистов по регионам'
						mainColor='#041A76'
						secondaryColor='#EA0A2A'
					/>
				</Card>
			</div>
			<div className='row row_mt_12'>
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
			<div className='row row_mt_12'>
				<Card>
					<Comment author={commentData1.author} text={commentData1.text} />
				</Card>
				<Card>
					<Comment author={commentData2.author} text={commentData2.text} />
				</Card>
				<Card>
					<Comment author={commentData3.author} text={commentData3.text} />
				</Card>
			</div>
			<h2 className='row__title row__title_mt_40'>Ссылки на источники</h2>
			<div className='row row_mt_12'>
				<Card>
					<Source
						text='Устойчивое развитие в современном мире: аналитика, тренды, необходимость'
						url='https://hh.ru/article/30953'
						icon={source1}
					/>
				</Card>
				<Card>
					<Source
						text='Что сдерживает рынок труда специалистов по устойчивому развитию'
						url='https://www.b-soc.ru/io/speczialisty-vyyavili-razryv-mezhdu-sprosom-kompanij-na-kvalificzirovannye-kadry-dlya-ustojchivogo-razvitiya-i-rogrammami-po-obrazovaniyu-v-oblasti-esg-predvaritelnye-rezultaty-issledovaniya/'
						icon={source2}
					/>
				</Card>
			</div>
		</div>
	);
};
