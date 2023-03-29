import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Main } from '@./components';
import LazyRoute from '~/../packages/routes/LazyRoute';

const InstallScreen = lazy(() => import('../src/app/webpages/Install/Install'));
const ParticipateScreen = lazy(
	() => import('../src/app/webpages/Participate/Participate')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}>
					<Route
						path="install"
						element={
							<LazyRoute>
								<InstallScreen />
							</LazyRoute>
						}
					/>
					<Route
						path="participate"
						element={
							<LazyRoute>
								<ParticipateScreen />
							</LazyRoute>
						}
					/>
					<Route path="*" element={<Navigate to="/install" />} />
				</Route>

				<Route index element={<Navigate to="/install" />} />
			</Routes>
		</BrowserRouter>
	</React.Suspense>
);

export default AppRoutes;
