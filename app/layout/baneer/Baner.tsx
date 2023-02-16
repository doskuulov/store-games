import React, { FC } from 'react'
import Image from 'next/image'
import styles from './Baner.module.scss'
import baner1 from '../../../public/baner1.png'
import baner2 from '../../../public/baner4.jpg'
import baner3 from '../../../public/baner3.jpg'
import logo from '../../../public/logo.nfs.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

interface ImageProps {
	src: string
	alt: string
	width?: number
	height?: number
}

const Baner = (props: ImageProps) => {
	return (
		<div className={styles.slider_wrapper}>
			<Carousel
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
					<div className={styles.wrapper}>
						<img
							src={props.src}
							alt={props.alt}
							width={props.width}
							height={props.height}
						/>
						;
						<p className={styles.wrap_p}>
							Тотальная война нового поколения началась! Сыграйте в Battlefield™
							2042 уже сегодня. Адаптируйтесь и процветайте!
						</p>
					</div>
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
