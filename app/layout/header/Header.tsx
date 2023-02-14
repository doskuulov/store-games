import { FC } from 'react'
import styles from './Header.module.scss'
import HeaderMenu from './menu/HeaderMenu'
import Language from './language/language'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Language />
			<HeaderMenu />
		</header>
	)
}

export default Header
