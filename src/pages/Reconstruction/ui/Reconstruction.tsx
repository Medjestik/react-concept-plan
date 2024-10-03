import type { FC } from 'react';

import { disciplineNodes } from '../mock/mock';

import { DisciplineStructure } from '../../../features/DisciplineStructure/ui/DisciplineStructure';

import styles from '../styles/style.module.css';

export const Reconstruction: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>ДЕКОМПОЗИЦИЯ ЖИЗНЕННОГО ЦИКЛА</h2>
			<DisciplineStructure nodes={disciplineNodes} layout={'mixed'} />
		</div>
	);
};
