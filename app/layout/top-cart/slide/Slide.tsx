import React from 'react'
import { FC, useState } from 'react'
import styles from './Slide.module.scss'
import Image from 'next/image'
import Mask from '../../../public/Mask.png'
import Karti from '../../../public/karti.png'

const Slide = () => {
	return (
		<div className={styles.slide}>
			<div className={styles.slide_one}>
				<div className={styles.slide_wrap}>
					<h3>Играй уже сейчас в Minecraft</h3>
					<div className={styles.slide_number}>
						<p>4 999 P</p>
						<span>-25%</span>
						<p className={styles.slide_num}>6 999P</p>
						{/* <Image className={styles.li} width={200} src={Karti} alt='d' /> */}
					</div>
					<div className={styles.slide_button}>
						<button className={styles.button_right}>Купить</button>
						<button className={styles.button_left}>В избранное</button>
					</div>
				</div>
			</div>
			{/* slide 2 */}
			<div className={styles.slide_two}>
				<div className={styles.slide_wrap}>
					<h3>ИИграй уже сейчас в Minecraft dangerous</h3>
					<div className={styles.slide_number}>
						<p>4 999 P</p>
						<span>-25%</span>
						<p className={styles.slide_num}>6 999P</p>{' '}
						{/* <Image className={styles.ll} width={300} src={Mask} alt='d' /> */}
					</div>

					<div className={styles.slide_button}>
						<button className={styles.button_right}>Купить</button>
						<button className={styles.button_left}>В избранное</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Slide
