import { Routes, Route } from 'react-router-dom';

import { EROUTESPATH } from '../shared/components/Navigation/types/types';

import { Menu } from '../widgets/Menu/ui/Menu';
import { Home } from '../pages/Home/ui/Home';
import { Reconstruction } from '../pages/Reconstruction/ui/Reconstruction';
import { MarketAnalyze } from '../pages/MarketAnalyze/ui/MarketAnalyze';

import styles from './app.module.scss';

export const App = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Menu />
				<div className={styles.container}>
					<Routes>
						<Route path={EROUTESPATH.HOME} element={<Home />} />
						<Route
							path={EROUTESPATH.TERM}
							element={<div>Термины и определения</div>}
						/>
						<Route path={EROUTESPATH.ANALYZE} element={<MarketAnalyze />} />
						<Route
							path={EROUTESPATH.PRODUCT}
							element={<div>Список продуктов</div>}
						/>
						<Route
							path={EROUTESPATH.RECONSTRUCTION}
							element={<Reconstruction />}
						/>
						<Route
							path={EROUTESPATH.DISCIPLINEQUAL}
							element={<div>Проектирование ПД</div>}
						/>
						<Route
							path={EROUTESPATH.DISCIPLINEMAIN}
							element={<div>Проектирование ОПД</div>}
						/>
						<Route
							path={EROUTESPATH.GRADUATE}
							element={<div>ПК выпускника</div>}
						/>
						<Route path={EROUTESPATH.PLAN} element={<div>Учебный план</div>} />
						<Route
							path={EROUTESPATH.ANNOTATION}
							element={<div>Аннотация</div>}
						/>
					</Routes>
				</div>
			</main>
		</div>
	);
};
