import { FC, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'
import classNames from 'classnames'

interface IButtonProps {
	primary: boolean
	danger?: boolean
	className?: string
}

function HeaderMenu({ primary, danger, className }: IButtonProps) {
	const [nav, setNav] = useState(false)
	const ulClasses = classNames(
		'ul',
		{ 'ul--primary': primary },
		{ 'ul--danger': danger },
		className
	)
	return (
		<div className={styles.menu}>
			<nav>
				<ul
					className={`${
						nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
					} ${ulClasses}`}
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
	)
}

export default HeaderMenu
