import React from 'react'
import styles from './Adaptive.module.scss'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Union from '../../../public/Union.png'
import Vector from '../../../public/Vector.png'

const Adaptive = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrap}>
				<div className={styles.logo}>
					<Image width={25} src={Logo} alt='logo' />
					<a>Playnchill</a>
				</div>

				<div className={styles.card}>
					<Image className={styles.icon} width={20} src={Union} alt='logo' />
					<Image className={styles.icon} width={20} src={Vector} alt='logo' />
				</div>
			</div>
		</div>
	)
}

export default Adaptive
