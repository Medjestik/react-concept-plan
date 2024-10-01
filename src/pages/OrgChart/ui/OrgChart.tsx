import type { FC } from 'react';

import { newNodes } from '../mock/mock';

import { Tree } from './Tree';

export const OrgChart: FC = () => {
	return (
		<div style={{ height: '100%' }}>
			<Tree nodes={newNodes} />
		</div>
	);
};
