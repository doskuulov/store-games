import { FC } from 'react'
import Image from 'next/image'
import profile from '../../../../public/profile.png'
import styles from './HeaderProfile.module.scss'

const HeaderProfile: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.profile__name}>Doskulov Ernis</div>
			</div>
			<Image src={profile} alt='profile' className={styles.profile__img} />
		</div>
	)
}

export default HeaderProfile
