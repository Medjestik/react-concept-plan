export interface IProduct {
	id: number;
	title: string;
	color: string;
	icon: string;
	nsi: number[];
	stages?: IStage[];
}

export interface IStage {
	name: string;
	description: IContent[];
	processes?: IProcess[];
	discipline?: IDiscipline;
}

export interface IProcess {
	name: string;
	description: IContent[];
	result: string;
	nsi: number[];
}

export interface IDiscipline {
	name: string;
	task: string;
	description: IContent[];
}

export interface IContent {
	type: string;
	text: string;
}
