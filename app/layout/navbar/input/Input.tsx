import React, { FC } from 'react'
import styles from './Input.module.scss'
const Input: FC = () => {
	return (
		<div className={styles.search__bar}>
			<input type='text' />
		</div>
	)
}

export default Input
