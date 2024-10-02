export interface INode {
	id: string;
	pid?: string | null;
	stpid?: string | null;
	name?: string | null;
	title?: string | null;
	type: string;
	tags?: string[] | null;
	description?: string | null;
	result?: string | null;
	nsis?: string | null;
	practice?: string | null;
	position?: string | number | null;
}

export interface ITreeProps {
	nodes: INode[];
	onClickNode: (node: unknown) => void;
}

export interface IOrgChartProps {
	nodes: INode[];
}
