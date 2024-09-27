import type { FC } from 'react';

import styles from '../styles/style.module.css';

export const Reconstruction: FC = () => {
	return (
		<div className={styles.container}>
			<iframe
				title='Test'
				src='https://web.mindonmap.com/view/8e01024c0443c934'
				width='100%'
				height='600'
				frameBorder='0'
				allowFullScreen>
				Ваш браузер не поддерживает iframe.
			</iframe>
		</div>
	);
};
