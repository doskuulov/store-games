import { FC, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const HeaderMenu: FC = () => {
	const [nav, setNav] = useState<boolean>()
	return (
		<div>
			<div className={styles.menu}>
				<nav>
					<ul
						className={
							nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
						}
					>
						{menu.map(item => (
							<MenuItem key={item.link} item={item} />
						))}
					</ul>
					<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
						{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default HeaderMenu
