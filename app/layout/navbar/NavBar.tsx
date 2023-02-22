import React, { FC } from 'react'
import styles from './NavBar.module.scss'
import Logo from './logo/Logo'
import Input from './input/Input'
import Card from './card/Card'

const NavBar: FC = () => {
	return (
		<div className={styles.navbar}>
			<Logo />
			<Input />
			<Card />
		</div>
	)
}

export default NavBar
