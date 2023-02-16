import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Baner.module.scss'
import baner1 from '../../../public/baner1.png'
import baner2 from '../../../public/baner4.jpg'
import baner3 from '../../../public/baner3.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
					<Image
						loading='lazy'
						className={styles.slider}
						src={baner1}
						alt='baner'
					/>
					<p className={styles.slider_title}>Legend 1</p>
				</div>
				<div>
					<Image
						loading='lazy'
						className={styles.slider}
						src={baner2}
						alt='baner'
					/>
					<p className={styles.slider_title}>Legend 2</p>
				</div>
				<div>
					<Image
						loading='lazy'
						className={styles.slider}
						src={baner3}
						alt='baner'
					/>
					<p className={styles.slider_title}>Legend 3</p>
				</div>
			</Carousel>
		</div>
	)
}

export default Baner
