import type { FC } from 'react';

import { useState } from 'react';

import { disciplineMain, disciplineCodes } from '../mock/mock';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { TextTemplate } from '../../../features/TextTemplate/ui/TextTemplate';

import styles from '../styles/style.module.css';

interface ICode {
	id: number;
	name: string;
}

interface IDiscipline {
	code: number;
	name: string;
	areaName: string;
	description: string;
}

export const DisciplineMain: FC = () => {
	const [currentCode, setCurrentCode] = useState<ICode>(disciplineCodes[0]);
	const [currentDiscipline, setCurrentDiscipline] =
		useState<IDiscipline | null>(null);

	const handleSelectCode = (code: ICode) => {
		setCurrentCode(code);
	};

	const openModal = (item: IDiscipline) => {
		setCurrentDiscipline(item);
	};

	const closeModal = () => {
		setCurrentDiscipline(null);
	};

	const disciplineTabs = [
		{
			label: 'Описание дисциплины',
			content: <TextTemplate text={currentDiscipline?.description || ''} />,
		},
	];

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Общеобразовательные дисцпилины</h2>
			<ul className={styles.codes}>
				{disciplineCodes.map((elem) => (
					<li
						key={elem.id}
						className={`${styles.code} ${
							currentCode.id === elem.id ? styles.code_active : ''
						}`}
						onClick={() => handleSelectCode(elem)}>
						<p className={styles.code_text}>{elem.name}</p>
					</li>
				))}
			</ul>
			<ul className={styles.list}>
				{disciplineMain
					.filter((elem) => currentCode.id === elem.code)
					.map((item, i) => (
						<li className={styles.item} key={i} onClick={() => openModal(item)}>
							<span className={styles.tag}>
								Общепрофессиональная дисциплина
							</span>
							<h4 className={styles.name}>{item.name}</h4>
							<p className={styles.caption}>{item.areaName}</p>
							<span className={styles.count}>{i + 1}</span>
						</li>
					))}
			</ul>
			{currentDiscipline && (
				<Modal
					isOpen={currentDiscipline !== null}
					onClose={closeModal}
					title={currentDiscipline.name}>
					<Tabs tabs={disciplineTabs} />
				</Modal>
			)}
		</div>
	);
};
