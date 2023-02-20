import React from 'react'
import styles from './Adaptive.module.scss'
import Image from 'next/image'
import { VscSearch } from 'react-icons/vsc'
import { IoCartOutline } from 'react-icons/io5'
import Logo from '../../../../public/Logo.menu.png'

const Adaptive = () => {
	return (
		<div className={styles.container}>
			<Image src={Logo} alt='logo' />
			<VscSearch size={22} />
			<IoCartOutline size={24} />
		</div>
	)
}

export default Adaptive
