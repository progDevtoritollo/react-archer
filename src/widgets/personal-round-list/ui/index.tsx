import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import { RoundCard } from '@/entities/round'
import { Round, User } from '@/entities/round/types/round'

interface RoundListProps {
	user: User
	rounds: Round[]
}

const RoundList: FC<RoundListProps> = ({ user, rounds }) => {
	return (
		<Box>
			<Grid container spacing={2}>
				{rounds.map(({ id, score, createdDate }) => (
					<Grid item xs={12} md={6} key={id}>
						<RoundCard
							id={id}
							userName={user.name}
							userSurname={user.surname}
							score={score}
							createdDate={createdDate}
							userPhoto={user.pictureUrl}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default RoundList
