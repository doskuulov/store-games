import React from 'react'
import styles from './TopCart.module.scss'
import Image from 'next/image'
import flesh from '../../../public/flesh.png'

const TopCart = () => {
	return (
		<div className={styles.cart}>
			<div className={styles.main__title}>
				<h2>Toп 4</h2>
				<Image src={flesh} alt='flesh' className={styles.flesh} />
			</div>
		</div>
	)
}

export default TopCart
