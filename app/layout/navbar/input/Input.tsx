import React, { FC } from 'react'
import styles from './Input.module.scss'
import { BsSearch } from 'react-icons/bs'
const Input: FC = () => {
	return (
		<div className={styles.search__bar}>
			<input type='text' placeholder='Поиск' />
		</div>
	)
}

export default Input
