import type { FC } from 'react';

import { ProductStructure } from '../../../features/ProductStructure/ui/ProductStructure';

import styles from '../styles/style.module.css';

export const Reconstruction: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>ДЕКОМПОЗИЦИЯ ЖИЗНЕННОГО ЦИКЛА</h2>
			<ProductStructure />
		</div>
	);
};
