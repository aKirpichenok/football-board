import React from 'react';

import CrashMessage from 'libs/ui/src/CrashMessage/CrashMessage';

import AppRoutes from '../../routes/AppRouter';
import ErrorBoundary from '../../utils/ErrorBoundary/errorBoundary';
import OnlineStatusProvider from '../../utils/OnlineStatusProvider';

const App = () => {
	return (
		<OnlineStatusProvider>
			<ErrorBoundary errorScreen={<CrashMessage />}>
				<AppRoutes />
			</ErrorBoundary>
		</OnlineStatusProvider>
	);
};

export default App;
