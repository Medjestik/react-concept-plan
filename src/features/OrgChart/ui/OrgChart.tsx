import type { FC } from 'react';
import type { IOrgChartProps } from '../types/types';

import { useState } from 'react';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { TextTemplate } from '../../../features/TextTemplate/ui/TextTemplate';

import { Tree } from './Tree';

export const OrgChart: FC<IOrgChartProps> = ({ nodes }) => {
	const [currentNode, setCurrentNode] = useState<any | null>(null);

	const handleNodeClick = (node: unknown) => {
		setCurrentNode(node);
	};

	const closeModal = () => {
		setCurrentNode(null);
	};

	const renderTabs = (node: any) => {
		switch (node.type) {
			case 'stage':
				return [
					{
						label: 'Описание этапа',
						content: <TextTemplate text={node.description || ''} />,
					},
				];

			case 'product':
				return [
					{
						label: 'Описание продукта',
						content: <TextTemplate text={node.description || ''} />,
					},
				];

			case 'process':
				return [
					{
						label: 'Описание процесса',
						content: <TextTemplate text={node.description || ''} />,
					},
					{
						label: 'Результат деятельности',
						content: <TextTemplate text={node.result || ''} />,
					},
					{
						label: 'Нормативные документы',
						content: <TextTemplate text={node.nsis || ''} />,
					},
				];

			case 'discipline':
				return [
					{
						label: 'Описание дисциплины',
						content: <TextTemplate text={node.description || ''} />,
					},
					{
						label: 'Практическое задание',
						content: <TextTemplate text={node.practice || ''} />,
					},
				];

			default:
				return [
					{
						label: 'Нет данных',
						content: <div>Нет информации для данного типа</div>,
					},
				];
		}
	};
	return (
		<div className='org-chart'>
			<div className='tree-container' style={{ height: '100%' }}>
				<Tree
					onClickNode={handleNodeClick}
					nodes={nodes.map((elem) => ({
						...elem,
						tags: [elem.type],
					}))}
				/>
			</div>
			{currentNode && (
				<Modal
					isOpen={currentNode !== null}
					onClose={closeModal}
					title={currentNode.name}>
					<Tabs tabs={renderTabs(currentNode)} />
				</Modal>
			)}
		</div>
	);
};