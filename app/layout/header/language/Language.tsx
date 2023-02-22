import React, { FC } from 'react'
import Image from 'next/image'
import down from '../../../../public/down.svg'
import styles from './Language.module.scss'

const Language: FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.language}>
				RU<span>/</span>$
			</p>
			<p className={styles.down}>
				<Image src={down} alt='down' className={styles.down__img} />
			</p>
		</div>
	)
}

export default Language
