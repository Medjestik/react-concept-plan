import { type FC, useEffect, useRef } from 'react';

import OrgChart from '@balkangraph/orgchart.js';

OrgChart.templates.ana.plus = `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>`;

OrgChart.templates.itTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.itTemplate.nodeMenuButton = '';
OrgChart.templates.itTemplate.nodeCircleMenuButton = {
	radius: 18,
	x: 250,
	y: 60,
	color: '#fff',
	stroke: '#aeaeae',
};

OrgChart.templates.invisibleGroup.padding = [20, 0, 0, 0];

interface Node {
	id: number | string;
	pid?: number | string;
	stpid?: string;
	name?: string;
	title?: string;
	img?: string;
	tags?: string[];
}

interface TreeProps {
	nodes: Node[];
}

export const Tree: FC<TreeProps> = ({ nodes }) => {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const chart = new OrgChart(divRef.current, {
				nodes,
				mouseScrool: OrgChart.action.ctrlZoom,
				template: 'ana',
				enableDragDrop: true,
				assistantSeparation: 170,
				align: OrgChart.ORIENTATION,
				nodeBinding: {
					field_0: 'name',
					field_1: 'title',
					img_0: 'img',
				},
				tags: {
					'top-management': {
						template: 'invisibleGroup',
						subTreeConfig: {
							orientation: OrgChart.orientation.bottom,
							collapse: {
								level: 1,
							},
						},
					},
					'it-team': {
						subTreeConfig: {
							layout: OrgChart.mixed,
							collapse: {
								level: 1,
							},
						},
					},
					'hr-team': {
						subTreeConfig: {
							layout: OrgChart.treeRightOffset,
							collapse: {
								level: 1,
							},
						},
					},
					'sales-team': {
						subTreeConfig: {
							layout: OrgChart.treeLeftOffset,
							collapse: {
								level: 1,
							},
						},
					},
					// eslint-disable-next-line prettier/prettier
					'department': {
						template: 'group',
					},
					'it-team-member': {
						template: 'itTemplate',
					},
				},
			});
		}
	}, [nodes]);

	return <div id='tree' ref={divRef}></div>;
};
