import React, { lazy } from 'react';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import { Main } from '@./components';
import LazyRoute from './LazyRoute';

const HomePage = lazy(() => import('../src/app/webpages/HomePage/HomePage'));

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Main />}>
			<Route
				index
				element={
					<LazyRoute>
						<HomePage />
					</LazyRoute>
				}
			/>
		</Route>
	)
);
