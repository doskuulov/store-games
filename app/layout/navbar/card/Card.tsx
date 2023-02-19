import React, { FC } from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import cart from '../../../../public/cart.png'
import heart from '../../../../public/heart.png'
const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.free}>
				<p>Бесплатно</p>
			</div>

			<div className={styles.section}>
				<div className={styles.icons}>
					<div className={styles.heart}>
						<Image src={heart} alt='icons' className={styles.icons__img} />
					</div>
				</div>
				<div className={styles.icons}>
					<div className={styles.cart}>
						<Image src={cart} alt='icons' className={styles.icons__img} />
						<div className={styles.cart__num}>
							<p>2</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
