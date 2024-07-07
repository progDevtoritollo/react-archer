import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import { RoundCard } from '@/entities/round'

import { ClubMemberRound } from '@/entities/round/types/round'

interface ClubListProps {
	rounds: ClubMemberRound[]
}

const ClubRoundList: FC<ClubListProps> = ({ rounds }) => {
	return (
		<Box>
			<Grid container spacing={2}>
				{rounds.map(({ id, date, score, userName, userSurname, image }) => (
					<Grid item xs={12} md={6} key={id}>
						<RoundCard
							id={id}
							userName={userName}
							userSurname={userSurname}
							score={score}
							createdDate={date}
							userPhoto={image}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ClubRoundList
