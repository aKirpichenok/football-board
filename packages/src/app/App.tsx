import React from 'react';

import { CrashMessage } from '../../../libs/ui/src/CrashMessage/CrashMessage';

import { routes } from '../../routes/AppRouter';
import ErrorBoundary from '../../utils/ErrorBoundary/errorBoundary';
import OnlineStatusProvider from '../../utils/OnlineStatusProvider';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
	return (
		<OnlineStatusProvider>
			<ErrorBoundary errorScreen={<CrashMessage />}>
				<RouterProvider router={routes} />
			</ErrorBoundary>
		</OnlineStatusProvider>
	);
};
