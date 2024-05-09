import { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

import { ClickableCard } from '@/shared/ui/clickable-card'

const styles = {
	left: { display: 'flex', flexDirection: 'row' },
	right: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		width: '40px',
		alignContent: 'center',
		marginLeft: '10px',
		marginRight: '15px',
	},
	center: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	description: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '19px',
		color: '#6c6b71',
		opacity: 0.7,
	},
	name: {
		color: '#3f3d46',
	},
	time: {
		paddingTop: '2px',
		fontSize: '12px',
		lineHeight: '19px',

		color: '#6c6b71',
		opacity: 0.7,
	},
}

interface RoundProps {
	id: number
	userName: string
	userSurname: string
	createdDate: string
	score: number
	userPhoto?: string
}

export const ClubCard: FC<RoundProps> = ({
	id,
	userName,
	userSurname,
	createdDate,
	score,
	userPhoto,
}) => {
	return (
		<ClickableCard>
			<Box sx={styles.left}>
				<Avatar sx={styles.avatar} src={userPhoto} />
				<Box sx={styles.center}>
					<Typography variant="h3" sx={styles.name}>
						{userName + ' ' + userSurname}
					</Typography>
					<Typography variant="body1" sx={styles.description}>
						round
					</Typography>
				</Box>
			</Box>
			<Box sx={styles.right}>
				<Typography variant="body1">{score}/300</Typography>
				<Typography variant="body1" sx={styles.time}>
					{createdDate}
				</Typography>
			</Box>
		</ClickableCard>
	)
}
