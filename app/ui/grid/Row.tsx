import cn from 'classnames'
import styles from './Row.module.scss'
import { FC, PropsWithChildren } from 'react'

interface IRow {
	isBorder?: boolean
	className?: string
}

const Row: FC<PropsWithChildren<IRow>> = ({
	children,
	className,
	isBorder,
}) => {
	return <div className={styles.line}></div>
}

export default Row
