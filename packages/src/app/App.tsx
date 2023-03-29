import React from 'react';

import { CrashMessage } from '@./ui';

import AppRoutes from '../../routes/AppRouter';
import ErrorBoundary from '../../utils/ErrorBoundary/errorBoundary';
import OnlineStatusProvider from '../../utils/OnlineStatusProvider';

export const App = () => {
	return (
		<OnlineStatusProvider>
			<ErrorBoundary errorScreen={<CrashMessage />}>
				<AppRoutes />
			</ErrorBoundary>
		</OnlineStatusProvider>
	);
};
