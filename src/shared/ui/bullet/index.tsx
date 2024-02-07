import { FC } from 'react'

import BulletImage from '@/app/assets/img/bullet.png'

interface Value {
	shotNumber: number
	x: number
	y: number
}

interface Props {
	value: Value
}

const Bullet: FC<Props> = ({ value }) => {
	return (
		<img
			key={value.shotNumber}
			style={{ position: 'absolute', left: value.x, top: value.y }}
			src={BulletImage}
			width={7}
			alt="bullet"
		/>
	)
}

export default Bullet
