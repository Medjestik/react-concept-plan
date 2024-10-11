import type { FC } from 'react';

import { educationPlan } from '../mock/mock';

import styles from '../styles/style.module.css';

export const Plan: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.tableWrapper}>
				<table className={styles.table} border={1} width={1200} cellPadding={5}>
					<thead>
						<tr>
							<th rowSpan={2}>№</th>
							<th rowSpan={2}>Наименование модуля и дисциплины</th>
							<th rowSpan={2}>Шифр&nbsp;компетенции</th>
							<th colSpan={8}>Семестры</th>
						</tr>
						<tr>
							<th className={styles.semesterHeader}>1</th>
							<th className={styles.semesterHeader}>2</th>
							<th className={styles.semesterHeader}>3</th>
							<th className={styles.semesterHeader}>4</th>
							<th className={styles.semesterHeader}>5</th>
							<th className={styles.semesterHeader}>6</th>
							<th className={styles.semesterHeader}>7</th>
							<th className={styles.semesterHeader}>8</th>
						</tr>
					</thead>
					<tbody>
						{educationPlan.map((elem, i) => (
							<tr key={i}>
								<td
									className={
										elem.colspan !== null ? styles.table_text_bold : ''
									}>
									{elem.number}
								</td>
								<td
									className={
										elem.colspan !== null ? styles.table_text_bold : ''
									}
									colSpan={elem.colspan || 1}>
									{elem.name}
								</td>
								{elem.colspan === null && (
									<>
										<td
											title={
												elem.competences
													? elem.competences
															.map((competence) => competence.name)
															.join(' ')
													: ''
											}>
											{elem.competences &&
												elem.competences.map((competence, index) => (
													<span key={index}>
														{competence.shortName}
														{index < elem.competences.length - 1 && ', '}
													</span>
												))}
										</td>
										<td className={elem.sem1 ? styles.table_star : ''}></td>
										<td className={elem.sem2 ? styles.table_star : ''}></td>
										<td className={elem.sem3 ? styles.table_star : ''}></td>
										<td className={elem.sem4 ? styles.table_star : ''}></td>
										<td className={elem.sem5 ? styles.table_star : ''}></td>
										<td className={elem.sem6 ? styles.table_star : ''}></td>
										<td className={elem.sem7 ? styles.table_star : ''}></td>
										<td className={elem.sem8 ? styles.table_star : ''}></td>
									</>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
