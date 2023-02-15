import React, { FC } from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

const Logo: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src={logo} alt='logo' />
				<p>Playnchill</p>
			</div>
		</div>
	)
}

export default Logo
