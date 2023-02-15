import React, { FC } from 'react'
import styles from './NavBar.module.scss'
import Logo from './logo/Logo'

const NavBar: FC = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
		</div>
	)
}

export default NavBar
