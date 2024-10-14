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
	shortName: string;
	color: string;
}

interface IDiscipline {
	code: number;
	name: string;
	number: number;
	areaName: string;
	description: string;
	color: string;
}

export const DisciplineMain: FC = () => {
	const [activeCodes, setActiveCodes] = useState<number[]>(
		disciplineCodes.map((code) => code.id)
	);
	const [currentDiscipline, setCurrentDiscipline] =
		useState<IDiscipline | null>(null);

	const handleSelectCode = (code: ICode) => {
		if (activeCodes.includes(code.id)) {
			setActiveCodes(activeCodes.filter((id) => id !== code.id));
		} else {
			setActiveCodes([...activeCodes, code.id]);
		}
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
			<div className={styles.spyrale}></div>
			<h2 className={styles.title}>Общеобразовательные дисциплины</h2>
			<ul className={styles.codes}>
				{disciplineCodes.map((elem) => (
					<li
						key={elem.id}
						className={`${styles.code} ${styles[`code_${elem.color}`]} ${
							activeCodes.includes(elem.id) ? '' : styles.code_disabled
						}`}
						onClick={() => handleSelectCode(elem)}>
						<p className={styles.code_text}>
							<span className={styles.code_text_bold}>{elem.shortName}</span>
							{elem.name}
						</p>
					</li>
				))}
			</ul>
			<ul className={styles.list}>
				{disciplineMain
					.filter((elem) => activeCodes.includes(elem.code))
					.map((item, i) => (
						<li
							className={`${styles.item} ${styles[`item_${item.color}`]}`}
							key={i}
							onClick={() => openModal(item)}>
							<span className={styles.tag}>
								Общепрофессиональная дисциплина
							</span>
							<h4 className={styles.name}>{item.name}</h4>
							<p className={styles.caption}>{item.areaName}</p>
							<span className={styles.count}>{item.number}</span>
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
