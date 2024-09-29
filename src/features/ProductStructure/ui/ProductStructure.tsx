import type { FC } from 'react';
import type {
	IProduct,
	IStage,
	IProcess,
} from '../../../pages/Product/types/types';

import { useState } from 'react';

import { products, nsiList } from '../../../pages/Product/mock/mock';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { ContentTemplate } from '../../ContentTemplate/ui/ContentTemplate';

import styles from '../styles/style.module.css';

export const ProductStructure: FC = () => {
	const [currentProduct, setCurrentProduct] = useState<IProduct>(products[0]);
	const [currentStage, setCurrentStage] = useState<IStage | null>(null);
	const [currentProcess, setCurrentProcess] = useState<IProcess | null>(null);

	const openStageModal = (item: IStage) => {
		setCurrentStage(item);
	};

	const closeStageModal = () => {
		setCurrentStage(null);
	};

	const openProcessModal = (item: IProcess) => {
		setCurrentProcess(item);
	};

	const closeProcessModal = () => {
		setCurrentProcess(null);
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

	const modalProcessTabs = [
		{
			label: 'Описание процесса',
			content: currentProcess?.description.map((item, i) => (
				<ContentTemplate key={i} type={item.type} text={item.text} />
			)),
		},
		{
			label: 'Реконструкция деятельности',
			content: (
				<ContentTemplate type='text' text={currentProcess?.result || ''} />
			),
		},
		{
			label: 'Нормативные акты',
			content: nsiList
				.filter((item) => currentProcess?.nsi.includes(item.id))
				.map((item) => (
					<ContentTemplate
						key={item.id}
						type='nsi'
						text={item.name}
						id={item.id}
					/>
				)),
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
						{stage.processes?.map((process, i) => (
							<div
								key={i}
								className={styles.process}
								onClick={() => openProcessModal(process)}>
								<div className={styles.process_question}>i</div>
								<div className={styles.advice}>
									<h6 className={styles.advice_title}>
										Реконструкция деятельности
									</h6>
									<p className={styles.advice_text}>{process.result}</p>
								</div>
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
			{currentProcess && (
				<Modal
					isOpen={currentProcess !== null}
					onClose={closeProcessModal}
					title={currentProcess.name}>
					<Tabs tabs={modalProcessTabs} />
				</Modal>
			)}
		</>
	);
};
