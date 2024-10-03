import { EROUTESPATH } from './types/types';

export const navLinks = [
	{
		text: 'Главная',
		type: 'home',
		id: 1,
		path: EROUTESPATH.HOME,
	},
	{
		text: 'Анализ рынка труда',
		type: 'analyze',
		id: 3,
		path: EROUTESPATH.ANALYZE,
	},
	{
		text: 'Список продуктов',
		type: 'product',
		id: 4,
		path: EROUTESPATH.PRODUCT,
	},
	{
		text: 'Реконструкция деятельности',
		type: 'reconstruction',
		id: 5,
		path: EROUTESPATH.RECONSTRUCTION,
	},
	{
		text: 'Проектирование ПД',
		type: 'discipline-qual',
		id: 6,
		path: EROUTESPATH.DISCIPLINEQUAL,
	},
	{
		text: 'Проектирование ОПД',
		type: 'discipline-main',
		id: 7,
		path: EROUTESPATH.DISCIPLINEMAIN,
	},
	{
		text: 'Учебный план',
		type: 'plan',
		id: 9,
		path: EROUTESPATH.PLAN,
	},
	{
		text: 'Аннотация',
		type: 'annotation',
		id: 10,
		path: EROUTESPATH.ANNOTATION,
	},
];
