import { FC } from 'react'
import { Avatar, Paper, Box, Typography } from '@mui/material'

import gold_trophy from '@/app/assets/img/gold_trophy.png'
import bronze_trophy from '@/app/assets/img/bronze_trophy.png'
import silver_trophy from '@/app/assets/img/silver_trophy.png'
import theme from '@/app/config/ui/theme'

const styles = {
	paper: {
		backgroundColor: theme.palette.customColors.card?.bg_enabled,
		border: 0,
		boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)',
		width: '99%',
		display: 'flex',
		justifyContent: 'space-between',
		mb: '15px',
		ml: '10px',
		mr: '10px',
		p: '10px',
		pl: '0px',
		borderRadius: '10px',
	},
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

interface EventProps {
	userName?: string
	time: string
	userScore?: number
	opponentName?: string
	opponentScore?: number
	competitionPlace?: number
	userPhoto?: string
}

export const Event: FC<EventProps> = ({
	userName,
	opponentScore = 0,
	time,
	userScore,
	opponentName,
	userPhoto,
	competitionPlace,
}) => {
	if (userScore && !opponentName) {
		return (
			<Paper variant="outlined" sx={styles.paper}>
				<Box sx={styles.left}>
					<Avatar sx={styles.avatar} src={userPhoto} />
					<Box sx={styles.center}>
						<Typography variant="h3" sx={styles.name}>
							{userName}
						</Typography>
						<Typography variant="body1" sx={styles.description}>
							round
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.right}>
					<Typography variant="body1">{userScore}/300</Typography>
					<Typography variant="body1" sx={styles.time}>
						{time}
					</Typography>
				</Box>
			</Paper>
		)
	} else if (opponentName && userScore) {
		return (
			<Paper variant="outlined" sx={styles.paper}>
				<Box sx={styles.left}>
					<Avatar sx={styles.avatar} src={userPhoto} />
					<Box sx={styles.center}>
						<Typography variant="h3" sx={styles.name}>
							{userName}
						</Typography>
						<Typography variant="body1" sx={styles.description}>
							duel with
							{' ' + opponentName}
						</Typography>
					</Box>
				</Box>
				<Box sx={styles.right}>
					{userScore <= opponentScore ? (
						<Typography
							variant="TextField"
							sx={{
								borderRadius: '20px',
								boxSizing: 'border-box',
								padding: '2px',
								background: '#e08181',
							}}>
							{userScore}:{opponentScore}
						</Typography>
					) : (
						<Typography
							variant="TextField"
							sx={{
								borderRadius: '20px',
								boxSizing: 'border-box',
								padding: '2px',
								background: 'rgba(113, 241, 82, 0.55)',
							}}>
							{userScore}:{opponentScore}
						</Typography>
					)}
					<Typography variant="body1" sx={styles.time}>
						{time}
					</Typography>
				</Box>
			</Paper>
		)
	} else if (competitionPlace) {
		return (
			<Paper variant="outlined" sx={styles.paper}>
				<Box sx={styles.left}>
					<Avatar sx={styles.avatar} src={userPhoto} />
					<Box sx={styles.center}>
						<Typography variant="h3" sx={styles.name}>
							{userName}
						</Typography>
						<Typography sx={styles.description}>competition</Typography>
					</Box>
				</Box>

				<Box sx={styles.right}>
					<Box
						sx={{ height: '20px', width: 'auto', marginBottom: '-6px' }}
						className="event-card__competition-place">
						{competitionPlace === 1 ? (
							//? 						img {
							// 	height: 20px;
							// 	width: auto;
							// 	margin-bottom: -6px;
							// }
							<img src={gold_trophy} alt="trophy"></img>
						) : competitionPlace === 2 ? (
							<img src={silver_trophy} alt="trophy"></img>
						) : competitionPlace === 3 ? (
							<img src={bronze_trophy} alt="trophy"></img>
						) : (
							<Typography variant="TextField">#{competitionPlace}</Typography>
						)}
					</Box>
					<Typography variant="body1" sx={styles.time}>
						{time}
					</Typography>
				</Box>
			</Paper>
		)
	} else {
		return <div>error</div>
	}
}
