import type { FC } from 'react';

import { educationPlan } from '../mock/mock';

import styles from '../styles/style.module.css';

export const Plan: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Учнебный план</h2>
			<div className={styles.tableWrapper}>
				<table className={styles.table} border={1} width={1200} cellPadding={5}>
					<thead>
						<tr>
							<th>№</th>
							<th>Наименование модуля и дисциплины</th>
							<th>Шифр&nbsp;компетенции </th>
							<th>1&nbsp;сем.</th>
							<th>2&nbsp;сем.</th>
							<th>3&nbsp;сем.</th>
							<th>4&nbsp;сем.</th>
							<th>5&nbsp;сем.</th>
							<th>6&nbsp;сем.</th>
							<th>7&nbsp;сем.</th>
							<th>8&nbsp;сем.</th>
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
										<td>{elem.competences}</td>
										<td className={elem.sem1 ? styles.table_star : ''}>
											{elem.sem1}
										</td>
										<td className={elem.sem2 ? styles.table_star : ''}>
											{elem.sem2}
										</td>
										<td className={elem.sem3 ? styles.table_star : ''}>
											{elem.sem3}
										</td>
										<td className={elem.sem4 ? styles.table_star : ''}>
											{elem.sem4}
										</td>
										<td className={elem.sem5 ? styles.table_star : ''}>
											{elem.sem5}
										</td>
										<td className={elem.sem6 ? styles.table_star : ''}>
											{elem.sem6}
										</td>
										<td className={elem.sem7 ? styles.table_star : ''}>
											{elem.sem7}
										</td>
										<td className={elem.sem8 ? styles.table_star : ''}>
											{elem.sem8}
										</td>
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
