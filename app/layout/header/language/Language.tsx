import React, { FC } from 'react'
import styles from './Language.module.scss'

const Language: FC = () => {
	return (
		<div>
			<p className={styles.language}>
				RU<span>/</span>$
			</p>
		</div>
	)
}

export default Language
