import type { FC } from 'react';

import { disciplineNodes } from '../mock/mock';

import { DisciplineStructure } from '../../../features/DisciplineStructure/ui/DisciplineStructure';

import styles from '../styles/style.module.css';

export const Discipline: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Преобразование реконструкции деятельности в дисциплины учебного плана
			</h2>
			<DisciplineStructure nodes={disciplineNodes} />
		</div>
	);
};
