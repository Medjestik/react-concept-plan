import type { FC } from 'react';
import type { IModalOverlayProps } from '../types/types';

import styles from '../styles/style.module.css';

export const ModalOverlay: FC<IModalOverlayProps> = ({ onClick }) => {
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
	return <div className={styles.overlay} onClick={onClick} />;
};
