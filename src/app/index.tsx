import { Routes, Route } from 'react-router-dom';

import { EROUTESPATH } from '../shared/components/Navigation/types/types';

import { Menu } from '../widgets/Menu/ui/Menu';
import { Home } from '../pages/Home/ui/Home';
import { Reconstruction } from '../pages/Reconstruction/ui/Reconstruction';
import { MarketAnalyze } from '../pages/MarketAnalyze/ui/MarketAnalyze';
import { Product } from '../pages/Product/ui/Product';
import { Discipline } from '../pages/Discipline/ui/Discipline';
import { DisciplineMain } from '../pages/DisciplineMain/ui/DisciplineMain';
import { Plan } from '../pages/Plan/ui/Plan';
import { Annotation } from '../pages/Annotation/ui/Annotation';

import styles from './app.module.scss';

export const App = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Menu />
				<div className={styles.container}>
					<Routes>
						<Route path={EROUTESPATH.HOME} element={<Home />} />
						<Route path={EROUTESPATH.ANALYZE} element={<MarketAnalyze />} />
						<Route path={EROUTESPATH.PRODUCT} element={<Product />} />
						<Route
							path={EROUTESPATH.RECONSTRUCTION}
							element={<Reconstruction />}
						/>
						<Route path={EROUTESPATH.DISCIPLINEQUAL} element={<Discipline />} />
						<Route
							path={EROUTESPATH.DISCIPLINEMAIN}
							element={<DisciplineMain />}
						/>
						<Route path={EROUTESPATH.PLAN} element={<Plan />} />
						<Route path={EROUTESPATH.ANNOTATION} element={<Annotation />} />
					</Routes>
				</div>
			</main>
			<div id='modal-root'></div>
		</div>
	);
};
