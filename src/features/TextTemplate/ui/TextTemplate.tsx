import type { FC } from 'react';
import type { ITextTemplateProps } from '../types/types';

import styles from '../styles/style.module.css';

export const TextTemplate: FC<ITextTemplateProps> = ({ text }) => {
	const paragraphs = text.split(/\r?\n/);

	return (
		<div className={styles.container}>
			{paragraphs.map((paragraph, index) => (
				// Рендер каждого абзаца в отдельном элементе p
				<p key={index} className={styles.text}>
					{paragraph}
				</p>
			))}
		</div>
	);
};
