import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './CrashMessage.module.scss';

interface ICrash {
	click?: (r: string) => void;
}

const CrashMessage: React.FunctionComponent<ICrash> = ({ click }) => {
	const { t } = useTranslation('content');

	return (
		<div className={styles.wrapper}>
			<h1>{t('crash_message')}</h1>
			<button
				className={styles.okButton}
				onClick={() => click && click('/install')}
			>
				{t('return')}
			</button>
		</div>
	);
};

export default CrashMessage;
