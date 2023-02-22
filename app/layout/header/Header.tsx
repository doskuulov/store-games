import { FC } from 'react'
import styles from './Header.module.scss'
import Language from './language/language'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Language />
			<HeaderMenu />
			<HeaderProfile />
		</header>
	)
}

export default Header
