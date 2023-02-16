import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Baner.module.scss'
import baner from '../../../public/baner1.png'
import { Carousel } from 'react-responsive-carousel'

const Baner: FC = () => {
	return (
		<div className={styles.slider_wrapper}>
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<Image loading='lazy' className={styles.slider} src={baner} alt='' />
					<p className={styles.slider_title}>Legend 1</p>
				</div>
				<div>
					<Image loading='lazy' className={styles.slider} src={baner} alt='' />
					<p className={styles.slider_title}>Legend 2</p>
				</div>
				<div>
					<Image loading='lazy' className={styles.slider} src={baner} alt='' />
					<p className={styles.slider_title}>Legend 3</p>
				</div>
			</Carousel>
		</div>
	)
}

export default Baner
