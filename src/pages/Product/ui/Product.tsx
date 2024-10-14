import type { FC } from 'react';
import type { IProduct } from '../types/types';

import { useState } from 'react';

import { products, nsiList } from '../mock/mock';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { ContentTemplate } from '../../../features/ContentTemplate/ui/ContentTemplate';
import { TextTemplate } from '../../../features/TextTemplate/ui/TextTemplate';

import styles from '../styles/style.module.css';

export const Product: FC = () => {
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

	const openModal = (item: IProduct) => {
		setCurrentProduct(item);
	};

	const closeModal = () => {
		setCurrentProduct(null);
	};

	const modalTabs = [
		{
			label: 'Нормативные акты',
			content: nsiList
				.filter((item) => currentProduct?.nsi.includes(item.id))
				.map((item) => (
					<ContentTemplate
						key={item.id}
						type='nsi'
						text={item.name}
						id={item.id}
					/>
				)),
		},
		{
			label: 'Описание продукта',
			content: <TextTemplate text={currentProduct?.description || ''} />,
		},
	];

	return (
		<>
			<div className={styles.container}>
				<div className={styles.spyrale}></div>
				<h2 className={styles.title}>
					Продукты, к созданию которых готовятся выпускники образовательной
					программы
				</h2>
				<ul className={styles.list}>
					{products.map((elem, i) => (
						// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
						<li
							key={i}
							onClick={() => openModal(elem)}
							className={`${styles.item} ${
								styles[`item_color_${elem.color}`]
							}`}>
							<span className={styles.count}>{i + 1}</span>
							<div className={styles.icon_container}>
								<div
									className={`${styles.icon} ${
										styles[`icon_type_${elem.icon}`]
									}`}></div>
							</div>
							<div className={styles.name}>{elem.title}</div>
							<div className={styles.nsi}>{elem.nsi.length} НСИ</div>
						</li>
					))}
				</ul>
			</div>
			{currentProduct && (
				<Modal
					isOpen={currentProduct !== null}
					onClose={closeModal}
					title={currentProduct.title}>
					<Tabs tabs={modalTabs} />
				</Modal>
			)}
		</>
	);
};
