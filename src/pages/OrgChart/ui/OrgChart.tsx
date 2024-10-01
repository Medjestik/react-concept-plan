import type { FC } from 'react';

import { useState } from 'react';

import { disciplineNodes } from '../mock/mock';

import { Modal } from '../../../shared/components/Modal/ui/Modal';
import { Tabs } from '../../../shared/components/Tabs/ui/Tabs';
import { TextTemplate } from '../../../features/TextTemplate/ui/TextTemplate';

import { Tree } from './Tree';

export const OrgChart: FC = () => {
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
				];

			case 'discipline':
				return [
					{
						label: 'Описание дисциплины',
						content: <TextTemplate text={node.description || ''} />,
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
		<>
			<div style={{ height: '100%' }}>
				<Tree onClickNode={handleNodeClick} nodes={disciplineNodes} />
			</div>
			{currentNode && (
				<Modal
					isOpen={currentNode !== null}
					onClose={closeModal}
					title={currentNode.name}>
					<Tabs tabs={renderTabs(currentNode)} />
				</Modal>
			)}
		</>
	);
};
