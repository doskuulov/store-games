import React, { FC } from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import cart from '../../../../public/cart.png'
import heart from '../../../../public/heart.png'
import { BsSuitHeart } from 'react-icons/bs'
import { BsCart2 } from 'react-icons/bs'
const Card: FC = () => {
	return (
		<div className={styles.card}>
			<div className={styles.free}>
				<p>Бесплатно</p>
			</div>

			<div className={styles.section}>
				<div className={styles.icons}>
					<div className={styles.heart}>
						<Image src={heart} alt='icons' />
					</div>
				</div>
				<div className={styles.icons}>
					<div className={styles.cart}>
						<Image src={cart} alt='icons' />
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
