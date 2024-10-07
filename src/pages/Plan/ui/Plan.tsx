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
							<th>Шифр компетенции </th>
							<th>1 семестр </th>
							<th>2 семестр </th>
							<th>3 семестр </th>
							<th>4 семестр </th>
							<th>5 семестр </th>
							<th>6 семестр </th>
							<th>7 семестр </th>
							<th>8 семестр </th>
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
										<td>{elem.sem1}</td>
										<td>{elem.sem2}</td>
										<td>{elem.sem3}</td>
										<td>{elem.sem4}</td>
										<td>{elem.sem5}</td>
										<td>{elem.sem6}</td>
										<td>{elem.sem7}</td>
										<td>{elem.sem8}</td>
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
