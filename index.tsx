import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'packages/src/app/App';
import {
	registerServiceWorker,
	unregisterServiceWorker,
} from './serviceWorkerRegistration.js';
import './i18n';
import './index.scss';

const enableServiceWorkerStandCondition = process.env.APP_STAND !== 'local';
const enableServiceWorkerDefaultValue = 'false';
const enableServiceWorkerValue =
	process.env.APP_ENABLE_SERVICE_WORKER || enableServiceWorkerDefaultValue;
const shouldInstallServiceWorker =
	JSON.parse(enableServiceWorkerValue) && enableServiceWorkerStandCondition;

if (shouldInstallServiceWorker) {
	registerServiceWorker();
}

if (!shouldInstallServiceWorker) {
	unregisterServiceWorker();
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(<App />);
