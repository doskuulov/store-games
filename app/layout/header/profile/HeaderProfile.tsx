import { FC } from 'react'
import Image from 'next/image'
import { FiUser } from 'react-icons/fi'
import profile from '../../../../public/profile.png'
import Vector from '../../../../public/Vector.png'
import Union from '../../../../public/Union.png'
import styles from './HeaderProfile.module.scss'

const HeaderProfile: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.profile__name}>Doskulov Ernis</div>
			</div>
			<Image src={profile} alt='profile' className={styles.profile__img} />
			{/* media block */}
			<div className={styles.row}></div>
			<div className={styles.card}>
				<Image
					width={22}
					src={Union}
					alt='profile'
					className={styles.card__img}
				/>
				<Image
					width={22}
					src={Vector}
					alt='profile'
					className={styles.card__img}
				/>
			</div>
		</div>
	)
}

export default HeaderProfile
