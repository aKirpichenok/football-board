import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SuccessIcon } from '../../../../utils/Icons/SuccessIcon';

import styles from './Install.module.scss';

export const Install = () => {
	const { t } = useTranslation('content');

	const [isCopied, setIsCopied] = useState(false);

	const command =
		'npx degit https://github.com/evgeny-kirichuk/yesjs-react-app my-app';

	const copyCommand = () => {
		navigator.clipboard.writeText(command).then(
			function () {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			},
			() => {
				console.log('copy failed');
			}
		);
	};
	const getApi = () => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'afc32509a1mshfa73ecd7fbc1b87p14dcc9jsn5d0d754042ca',
				'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com',
			},
		};

		fetch(
			'https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39',
			options
		)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));
	};

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>{`${t('install_title')}`}</span>
			<span className={styles.subtitle}>
				<a
					href={process.env.APP_REPOSITORY_LINK}
					target="_blank"
					rel="noreferrer"
				>
					{process.env.APP_NAME}
				</a>
				&nbsp;
				{`${t('install_subtitle')}`}
			</span>
			<button onClick={getApi}> get infor</button>

			<button
				aria-label={
					isCopied
						? (t('aria_label.command_copied') as string)
						: (t('aria_label.copy_install') as string)
				}
				className={styles.commandWrapper}
				onClick={copyCommand}
			>
				<pre>
					<code>{command}</code>
				</pre>
				{isCopied ? (
					<SuccessIcon className={styles.copiedIcon} />
				) : (
					// <CopyIcon className={styles.copyIcon} />
					<div>copy icon</div>
				)}
			</button>
		</div>
	);
};
