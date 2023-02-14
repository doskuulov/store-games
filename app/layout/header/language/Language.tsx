import React, { FC } from 'react'
import { HiArrowSmDown } from 'react-icons/hi'
import styles from './Language.module.scss'

const Language: FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.language}>
				RU<span>/</span>$
			</p>
			<p className={styles.d}>
				<HiArrowSmDown />
			</p>
		</div>
	)
}

export default Language
