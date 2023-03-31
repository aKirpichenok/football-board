import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { OnlineStatusContext } from '../../../../utils/OnlineStatusProvider';
import { Portal } from '../../../../../libs/ui/src/Portal/Portal';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { OfflineMessage } from '../OfflineMessage/OfflineMessage';

import styles from './Main.module.scss';

export const Main: React.FC = () => {
	const online = useContext(OnlineStatusContext);
	const [showOfflineMessage, setShowOfflineMessage] = useState(!online);

	const closeOfflineMessage = () => setShowOfflineMessage(false);

	useEffect(() => {
		setShowOfflineMessage(!online);
	}, [online]);

	return (
		<div className={styles.mainWrapper}>
			<Header />
			<main className={styles.content}>
				<div className={styles.routesWrapper}>
					<Outlet />
				</div>
			</main>
			<Footer />
			<Portal display={showOfflineMessage} onWrapperClick={closeOfflineMessage}>
				<OfflineMessage onOkClick={closeOfflineMessage} />
			</Portal>
		</div>
	);
};
