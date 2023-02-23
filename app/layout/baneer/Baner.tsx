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
	src?: string
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
					{/* <div className={styles.wrapper}>
						<img
							src='https://i.ibb.co/vkCFv1D/baner-logo.png'
							alt={props.alt}
							width={props.width}
							height={props.height}
							className={styles.wrap_logo}
						/>
						<h6 className={styles.wrap_p}>
							Тотальная война нового поколения началась! Сыграйте в Battlefield™
							2042 уже сегодня. Адаптируйтесь и процветайте!
						</h6>

						<div className={styles.title}>
							<h1>4 999 Р</h1>
							<span>-25%</span>
							<p>6 999 P</p>
						</div>

						<div className={styles.wrap_button}>
							<button className={styles.button1}>В корзину</button>
							<button className={styles.button2}>В избранное</button>
						</div>
					</div> */}
				</div>
				<div>
					<Image
						loading='lazy'
						className={styles.slider}
						src={baner2}
						alt='baner'
					/>
					{/* <div className={styles.wrapper}>
						<img
							src='https://i.ibb.co/vkCFv1D/baner-logo.png'
							alt={props.alt}
							width={props.width}
							height={props.height}
							className={styles.wrap_logo}
						/>
						<h6 className={styles.wrap_p}>
							Тотальная война нового поколения началась! Сыграйте в Battlefield™
							2042 уже сегодня. Адаптируйтесь и процветайте!
						</h6>

						<div className={styles.title}>
							<h1>4 999 Р</h1>
							<span>-25%</span>
							<p>6 999 P</p>
						</div>

						<div className={styles.wrap_button}>
							<button className={styles.button1}>В корзину</button>
							<button className={styles.button2}>В избранное</button>
						</div>
					</div> */}
				</div>
				<div>
					<Image
						loading='lazy'
						className={styles.slider}
						src={baner3}
						alt='baner'
					/>
					{/* <div className={styles.wrapper}>
						<img
							src='https://i.ibb.co/vkCFv1D/baner-logo.png'
							alt={props.alt}
							width={props.width}
							height={props.height}
							className={styles.wrap_logo}
						/>
						<h6 className={styles.wrap_p}>
							Тотальная война нового поколения началась! Сыграйте в Battlefield™
							2042 уже сегодня. Адаптируйтесь и процветайте!
						</h6>

						<div className={styles.title}>
							<h1>4 999 Р</h1>
							<span>-25%</span>
							<p>6 999 P</p>
						</div>

						<div className={styles.wrap_button}>
							<button className={styles.button1}>В корзину</button>
							<button className={styles.button2}>В избранное</button>
						</div>
					</div> */}
				</div>
			</Carousel>
		</div>
	)
}

export default Baner
