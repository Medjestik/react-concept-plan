import type { FC } from 'react';
import type { ITreeProps } from '../types/types';

import { useEffect, useRef } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

import '../styles/style.css';

OrgChart.templates.ana.plus = `<circle cx="15" cy="15" r="15" fill="#ffffff"></circle>
    <text text-anchor="middle" style="font-size: 16px;cursor:pointer;" fill="#0A567A" x="15" y="20">{collapsed-children-count}</text>`;

OrgChart.templates.ana.minus = `<circle cx="15" cy="15" r="15" fill="#ffffff"></circle>
<text text-anchor="middle" style="font-size: 16px;cursor:pointer;" fill="#0A567A" x="15" y="18">—</text>`;

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.field_0 =
	'<text data-width="213" data-text-overflow="multiline-3" style="font-size: 18px;" fill="#757575" x="12" y="60" text-anchor="left" class="field_0">{val}</text>';
OrgChart.templates.myTemplate.field_1 =
	'<text data-width="160" data-text-overflow="ellipsis" style="font-size: 12px;" fill="#757575" x="12" y="30" text-anchor="left" class="field_1">{val}</text>';
OrgChart.templates.myTemplate.field_2 =
	'<text data-width="54" data-text-overflow="ellipsis" style="font-size: 12px;" fill="#757575" x="222" y="30" text-anchor="right" class="field_1">{val}</text>';
OrgChart.templates.myTemplate.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#5d87ff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

OrgChart.templates.product = Object.assign({}, OrgChart.templates.myTemplate);
OrgChart.templates.product.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#074A6A" rx="5" ry="5"></rect>';

OrgChart.templates.stage = Object.assign({}, OrgChart.templates.myTemplate);
OrgChart.templates.stage.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#15678D" rx="5" ry="5"></rect>';

OrgChart.templates.process = Object.assign({}, OrgChart.templates.myTemplate);
OrgChart.templates.process.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#108DC7" rx="5" ry="5"></rect>';

OrgChart.templates.group.node =
	'<rect x="0" y="0" height="{h}" width="{w}" fill="#fff" stroke="red" stroke-width="1" stroke-dasharray="15" rx="5" ry="5"></rect>';
OrgChart.templates.group.field_0 =
	'<text data-width="240" data-text-overflow="multiline-2-ellipsis" style="font-size: 18px;" fill="#000" x="145" y="20" text-anchor="middle" class="field_disc">{val}</text>';

OrgChart.templates.invisibleGroup.padding = [20, 0, 0, 0];

export const Tree: FC<ITreeProps> = ({ onClickNode, layout, nodes }) => {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const chart = new OrgChart(divRef.current, {
				nodes,
				nodeMouseClick: OrgChart.action.none,
				mouseScrool: OrgChart.action.zoom,
				lazyLoading: false,
				template: 'myTemplate',
				layout: layout === 'mixed' ? OrgChart.mixed : OrgChart.normal,
				scaleInitial: OrgChart.match.boundary,
				enableSearch: false,
				zoom: {
					speed: 30,
					smooth: 10,
				},
				nodeBinding: {
					field_0: 'name',
					field_1: 'title',
					field_2: 'position',
				},
				tags: {
					// eslint-disable-next-line prettier/prettier
					'product': {
						template: 'product',
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
					// eslint-disable-next-line prettier/prettier
					'stage': {
						template: 'stage',
					},
					// eslint-disable-next-line prettier/prettier
					'process': {
						template: 'process',
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
