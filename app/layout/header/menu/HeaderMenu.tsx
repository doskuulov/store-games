import { FC, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
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
		<>
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
						{nav ? <AiOutlineClose size={30} /> : <HiMenuAlt1 size={30} />}
					</div>
				</nav>
				{/* media block */}
			</div>
			<div className={styles.logo}>
				<div className={styles.wrap}>
					<Image src={logo} alt='logo' className={styles.logo_img} />
					<a href='/'>Playnchill</a>
				</div>
			</div>
		</>
	)
}

export default HeaderMenu
