import type { FC } from 'react';
import type {
	IProduct,
	IStage,
	IDiscipline,
} from '../../../pages/Product/types/types';

import { useState } from 'react';

import { products } from '../../../pages/Product/mock/mock';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { ContentTemplate } from '../../ContentTemplate/ui/ContentTemplate';

import styles from '../styles/style.module.css';

export const DisciplineStructure: FC = () => {
	const [currentProduct, setCurrentProduct] = useState<IProduct>(products[0]);
	const [currentStage, setCurrentStage] = useState<IStage | null>(null);
	const [currentDiscipline, setCurrentDiscipline] =
		useState<IDiscipline | null>(null);

	const openStageModal = (item: IStage) => {
		setCurrentStage(item);
	};

	const closeStageModal = () => {
		setCurrentStage(null);
	};

	const openDisciplineModal = (item: IDiscipline) => {
		setCurrentDiscipline(item);
	};

	const closeDisciplineModal = () => {
		setCurrentDiscipline(null);
	};

	const handleSelectProduct = (item: IProduct) => {
		setCurrentProduct(item);
	};

	const modalStageTabs = [
		{
			label: 'Описание этапа',
			content: currentStage?.description.map((item, i) => (
				<ContentTemplate key={i} type={item.type} text={item.text} />
			)),
		},
		{
			label: 'Описание продукта',
			content: <></>,
			disabled: true,
		},
	];

	const modalDisciplineTabs = [
		{
			label: 'Описание дисциплины',
			content: currentDiscipline?.description.map((item, i) => (
				<ContentTemplate key={i} type={item.type} text={item.text} />
			)),
		},
		{
			label: 'Практическое задание',
			content: (
				<ContentTemplate type='text' text={currentDiscipline?.task || ''} />
			),
		},
	];

	return (
		<>
			<p className={styles.title}>продукт «{currentProduct.title}»</p>
			<ul className={styles.list}>
				{products.map((elem, i) => {
					return (
						<li
							key={i}
							onClick={() => handleSelectProduct(elem)}
							className={`${styles.item} ${
								elem.id === currentProduct.id ? styles.item_active : ''
							}`}>
							{elem.id === currentProduct.id ? (
								<>
									<span className={styles.tag}>Продукт</span>
									<h4 className={styles.name}>{elem.title}</h4>
									<span className={styles.count}>{i + 1}</span>
								</>
							) : (
								<>
									<span className={styles.tag}>Продукт</span>
									<span className={styles.count}>{i + 1}</span>
								</>
							)}
						</li>
					);
				})}
			</ul>
			<ul className={styles.columns}>
				{currentProduct.stages?.map((stage, i) => (
					<li className={styles.column} key={i}>
						<div className={styles.stage} onClick={() => openStageModal(stage)}>
							<span className={styles.stage_tag}>Этап</span>
							<h4 className={styles.stage_name}>{stage.name}</h4>
						</div>
						{stage.discipline && (
							<div
								key={i}
								className={styles.discipline}
								onClick={() => {
									if (stage.discipline) {
										openDisciplineModal(stage.discipline);
									}
								}}>
								<span className={styles.discipline_tag}>Дисциплина</span>
								<h4 className={styles.discipline_name}>
									{stage.discipline?.name}
								</h4>
							</div>
						)}
						{stage.processes?.map((process, i) => (
							<div key={i} className={styles.process}>
								<span className={styles.process_tag}>Процесс</span>
								<h4 className={styles.process_name}>{process.name}</h4>
							</div>
						))}
					</li>
				))}
			</ul>
			{currentStage && (
				<Modal
					isOpen={currentStage !== null}
					onClose={closeStageModal}
					title={currentStage.name}>
					<Tabs tabs={modalStageTabs} />
				</Modal>
			)}
			{currentDiscipline && (
				<Modal
					isOpen={currentDiscipline !== null}
					onClose={closeDisciplineModal}
					title={currentDiscipline.name}>
					<Tabs tabs={modalDisciplineTabs} />
				</Modal>
			)}
		</>
	);
};
