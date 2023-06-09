import React, { ReactElement } from 'react';

import { Loader } from 'libs/ui/src/Loader/Loader';

const LazyRoute: React.FC<{ children: ReactElement }> = ({ children }) => (
	<React.Suspense fallback={<Loader style={{ minHeight: 500 }} delay={200} />}>
		{children}
	</React.Suspense>
);

export default LazyRoute;
