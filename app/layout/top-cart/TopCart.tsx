import { FC, useState } from 'react'
import styles from './TopCart.module.scss'
import Image from 'next/image'
import flesh from '../../../public/flesh.png'
// sale
import sale1 from '../../../public/sale1.png'
import sale2 from '../../../public/sale2.png'
import sale3 from '../../../public/sale3.png'
import sale4 from '../../../public/sale4.png'
//
import karti from '../../../public/karti.png'

function TopCart() {
	return (
		<div className={styles.cart}>
			<div className={styles.main__title}>
				<h2>Toп 4</h2>
				<Image src={flesh} alt='flesh' className={styles.flesh} />
			</div>
			{/* sale start */}
			<div className={styles.main}>
				<div className={styles.sale}>
					<Image className={styles.sale1} src={sale1} alt='sale' />
					<button className={styles.hidden_element}>В корзину</button>

					<div className={styles.number}>
						<p>16 400 P</p>
						<span>-15%</span>
						<p className={styles.tit}>16 400P</p>
					</div>
					<div className={styles.title}>Minecraft</div>
					<div className={styles.key}>
						<div className={styles.sfera}></div>
						<span>Буст</span>
						<div className={styles.sfera}></div>
						<span>Origin</span>
					</div>
				</div>
				{/* 2 */}
				<div className={styles.sale}>
					<Image className={styles.sale1} src={sale2} alt='sale' />
					<button className={styles.hidden_element}>В корзину</button>
					<div className={styles.number}>
						<p>16 400 P</p>
						<span>-15%</span>
						<p className={styles.tit}>16 400P</p>
					</div>
					<div className={styles.title}>Minecraft</div>
					<div className={styles.key}>
						<div className={styles.sfera}></div>
						<span>Ключ</span>
						<div className={styles.sfera}></div>
						<span>Аккаунт Steam</span>
					</div>
				</div>
				{/* 3 */}
				<div className={styles.sale}>
					<Image className={styles.sale1} src={sale3} alt='sale' />
					<button className={styles.hidden_element}>В корзину</button>
					<div className={styles.number}>
						<p>16 400 P</p>
						<span>-15%</span>
						<p className={styles.tit}>16 400P</p>
					</div>
					<div className={styles.title}>Minecraft</div>
					<div className={styles.key}>
						<div className={styles.sfera}></div>
						<span>Ключ</span>
						<div className={styles.sfera}></div>
						<span>EpicGames</span>
					</div>
				</div>
				{/* 4 */}
				<div className={styles.sale}>
					<Image className={styles.sale1} src={sale4} alt='sale' />
					<button className={styles.hidden_element}>В корзину</button>
					<div className={styles.number}>
						<p>16 400 P</p>
						<span>-15%</span>
						<p className={styles.tit}>16 400P</p>
					</div>
					<div className={styles.title}>Minecraft</div>
					<div className={styles.key}>
						<div className={styles.sfera}></div>
						<span>Ключ</span>
						<div className={styles.sfera}></div>
						<span>EpicGames</span>
					</div>
				</div>
			</div>
			{/*  */}
			<div className={styles.slide}>
				<div className={styles.slide_one}>
					<div className={styles.slide_wrap}>
						<h3>Играй уже сейчас в Minecraft</h3>
						<div className={styles.slide_number}>
							<p>4 999 P</p>
							<span>-25%</span>
							<p className={styles.slide_num}>6 999P</p>
						</div>
						<div className={styles.slide_button}>
							<button className={styles.button_right}>Купить</button>
							<button className={styles.button_left}>В избранное</button>
							{/* <Image className={styles.sli} src={karti} alt='' /> */}
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
							<p className={styles.slide_num}>6 999P</p>
						</div>
						<div className={styles.slide_button}>
							<button className={styles.button_right}>Купить</button>
							<button className={styles.button_left}>В избранное</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopCart
