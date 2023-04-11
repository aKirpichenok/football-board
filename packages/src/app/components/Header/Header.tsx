import { Button } from 'libs/ui/src/Button/Button';
import styles from './Header.module.scss';
import { BarNav } from 'libs/ui/src/BarNav/BarNav';

const navItems = [
	{ label: 'Страны', link: '/countries' },
	{ label: 'Команды', link: '/teams' },
	{ label: 'Игроки', link: '/players' },
	{ label: 'Матчи', link: '/matches' },
];

export const Header: React.FC = () => {
	return (
		<header className={styles['header']}>
			<span>LOGO</span>
			<BarNav navItems={navItems} />
			<Button>Войти</Button>
		</header>
	);
};
