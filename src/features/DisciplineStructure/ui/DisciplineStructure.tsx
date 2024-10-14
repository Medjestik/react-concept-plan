import type { FC } from 'react';
import type { IProduct } from '../../../pages/Product/types/types';
import type { INode } from '../../OrgChart/types/types';

import { useState } from 'react';

import { products } from '../../../pages/Product/mock/mock';

import { OrgChart } from '../../OrgChart/ui/OrgChart';

import styles from '../styles/style.module.css';

interface IDisciplineStructure {
	nodes: INodes[];
	layout?: string;
}

interface INodes {
	id: number;
	nodes: INode[];
}

export const DisciplineStructure: FC<IDisciplineStructure> = ({
	nodes,
	layout,
}) => {
	const [currentProduct, setCurrentProduct] = useState<IProduct>(products[0]);
	const [currentNodes, setCurrentNodes] = useState<INode[]>(nodes[0].nodes);

	const handleSelectProduct = (item: IProduct) => {
		setCurrentProduct(item);
		setCurrentNodes(nodes[item.id - 1].nodes);
	};

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
			<OrgChart
				nodes={currentNodes}
				layout={layout}
				type={layout && layout === 'mixed' ? 'default' : 'discipline'}
			/>
		</>
	);
};
