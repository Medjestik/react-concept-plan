export interface IIndicatorItemProps {
	type: string;
	text: string;
}

export interface IIndicatorListProps {
	title?: string;
	data: IIndicatorItemProps[];
}
