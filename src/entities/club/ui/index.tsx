import { FC } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { ClickableCard } from '@/shared/ui/clickable-card'
import { Club } from '@/entities/club/types/club'

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

export const ClubCard: FC<Club> = ({ id, name, trainer, city, country, image }) => {
	return (
		<Link replace to={`/club/${id}`}>
			<ClickableCard>
				<Box sx={styles.left}>
					<Avatar sx={styles.avatar} src={image} />
					<Box sx={styles.center}>
						<Typography variant="body1" sx={styles.description}>
							{name}
						</Typography>
						<Typography variant="h3" sx={styles.name}>
							{trainer}
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.right}>
					<Typography variant="body1">{city}</Typography>
					<Typography variant="body1" sx={styles.time}>
						<Box sx={{ m: 1 }}>
							<img
								loading="lazy"
								width="20"
								srcSet={`https://flagcdn.com/w40/${country.toLowerCase()}.png 2x`}
								src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
								alt=""
							/>
						</Box>
					</Typography>
				</Box>
			</ClickableCard>
		</Link>
	)
}
