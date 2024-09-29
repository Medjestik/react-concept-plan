import type { FC } from 'react';
import type { IModalProps } from '../types/types';

import ReactDOM from 'react-dom';

import { ModalOverlay } from './ModalOverlay';
import useOnPressEsc from '../../../../hooks/useOnPressEsc';

import styles from '../styles/style.module.css';

export const Modal: FC<IModalProps> = ({
	isOpen,
	onClose,
	title,
	closeByClickOutside = true,
	closeByPressEsc = true,
	children,
}) => {
	const modalRoot = document.getElementById('modal-root');

	useOnPressEsc(closeByPressEsc ? onClose : undefined);

	const handleOverlayClick = () => {
		if (closeByClickOutside) {
			onClose();
		}
	};

	const modalContent = (
		<div className={`${styles.modal} ${isOpen ? styles.modal_opened : ''}`}>
			{isOpen && <ModalOverlay onClick={handleOverlayClick} />}
			<div className={styles.container}>
				<div className={`${styles.header}`}>
					<h2 className={styles.title}>{title || ''}</h2>
					<button
						className={`${styles.close}`}
						type='button'
						onClick={onClose}></button>
				</div>
				{children}
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, modalRoot || document.body);
};
