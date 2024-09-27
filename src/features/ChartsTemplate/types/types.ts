export interface IChartPieProps {
	data: IChartPieDataItem[];
	title?: string;
	graphHeight: number;
}

export interface IChartPieDataItem {
	name: string;
	value: number;
	color?: string;
}

export interface IChartBarProps {
	data: IChartBarDataItem[];
	title?: string;
	mainColor: string;
	secondaryColor?: string;
}

export interface IChartBarDataItem {
	name: string;
	value: number;
}
