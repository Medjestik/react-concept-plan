import { type FC, useEffect, useRef } from 'react';

import OrgChart from '@balkangraph/orgchart.js';

import '../styles/style.css';

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

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.field_0 =
	'<text data-width="213" data-text-overflow="multiline-3" style="font-size: 16px;" fill="#757575" x="12" y="60" text-anchor="left" class="field_0">{val}</text>';
OrgChart.templates.myTemplate.field_1 =
	'<text data-width="160" data-text-overflow="ellipsis" style="font-size: 16px;" fill="#757575" x="12" y="30" text-anchor="left" class="field_1">{val}</text>';
OrgChart.templates.myTemplate.field_2 =
	'<text data-width="54" data-text-overflow="ellipsis" style="font-size: 16px;" fill="#757575" x="212" y="30" text-anchor="right" class="field_1">{val}</text>';
OrgChart.templates.myTemplate.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#5d87ff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

OrgChart.templates.invisibleGroup.padding = [20, 0, 0, 0];

interface Node {
	id: string;
	pid?: string | null;
	stpid?: string | null;
	name?: string | null;
	title?: string | null;
	type?: string | null;
	tags?: string[] | null;
	description?: string | null;
	result?: string | null;
	nsis?: string | null;
	practice?: string | null;
	position?: string | number | null;
}

interface TreeProps {
	nodes: Node[];
	onClickNode: (node: unknown) => void;
}

export const Tree: FC<TreeProps> = ({ onClickNode, nodes }) => {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const chart = new OrgChart(divRef.current, {
				nodes,
				mouseScrool: OrgChart.action.ctrlZoom,
				template: 'myTemplate',
				editUI: undefined,
				scaleInitial: OrgChart.match.boundary,
				enableSearch: false,
				align: OrgChart.ORIENTATION,
				nodeBinding: {
					field_0: 'name',
					field_1: 'title',
					field_2: 'position',
				},
				tags: {
					// eslint-disable-next-line prettier/prettier
					'product': {
						template: 'invisibleGroup',
						subTreeConfig: {
							orientation: OrgChart.orientation.bottom,
							collapse: {
								level: 1,
							},
						},
					},
					// eslint-disable-next-line prettier/prettier
					'discipline': {
						template: 'group',
						subTreeConfig: {
							layout: OrgChart.mixed,
							collapse: {
								level: 1,
							},
						},
					},
					'it-team-member': {
						template: 'itTemplate',
					},
				},
			});
			chart.onNodeClick((args) => {
				if (args.node && args.node.id) {
					const node = chart.get(args.node.id);
					onClickNode(node);
				}
				return false;
			});
		}
	}, [nodes]);

	return <div id='tree' ref={divRef}></div>;
};
