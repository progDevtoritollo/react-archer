import { useState, useEffect, FC } from 'react'

import SerieInfoSection from '@/shared/ui/serie-info-section'
import ShotScore from '@/shared/ui/shot-score-box'

import { contestTypeEnum } from '@/entities/contest/types'

import './index.scss'
import { Typography } from '@mui/material'

interface SerieProp {
	contestType?: contestTypeEnum
	seriesNumber?: number
	firstShot?: number | undefined
	secondShot?: number | undefined
	thirdShot?: number | undefined
	Set_pts?: number
	isOpponents?: boolean
}

const Serie: FC<SerieProp> = ({
	contestType = contestTypeEnum.ROUND,
	seriesNumber = 1,
	firstShot,
	secondShot,
	thirdShot,
	Set_pts = 0,
	isOpponents = false,
}) => {
	const [seriesScore, setSeriesScore] = useState(0)
	let isDuel = contestType == contestTypeEnum.DUEL

	useEffect(() => {
		if (firstShot != undefined && secondShot != undefined && thirdShot != undefined) {
			let sum = firstShot + secondShot + thirdShot
			setSeriesScore(sum)
		}
	}, [firstShot, secondShot, thirdShot])

	return (
		<div className="serie">
			{isOpponents ? (
				<Typography sx={{ mt: '16px', ml: '8px' }} variant="input_semi_bolt">
					Opponent
				</Typography> // <div className="whose">Opponent</div>
			) : isDuel ? (
				<Typography sx={{ mr: '47px' }} variant="input_semi_bolt">
					You
				</Typography> // <div className="whose you">You</div>
			) : null}

			<div className="serie__series-number">
				{seriesNumber <= 1 ? <Typography variant="input_semi_bolt">Series num.</Typography> : null}

				<SerieInfoSection InfoNumber={seriesNumber <= 0 ? seriesNumber + 1 : seriesNumber} />
			</div>
			<div className="serie__shots-section">
				{seriesNumber <= 1 && !isOpponents ? (
					<Typography variant="input_semi_bolt">Shots</Typography>
				) : null}

				<div className="shots-section__shots-container">
					<ShotScore shotScore={firstShot} />
					<ShotScore shotScore={secondShot} />
					<ShotScore shotScore={thirdShot} />
				</div>
			</div>
			<div className="serie__series-score">
				{seriesNumber <= 1 ? <Typography variant="input_semi_bolt">Series score</Typography> : null}

				<SerieInfoSection InfoNumber={seriesScore} />
			</div>
			{isDuel ? (
				<div className="serie__set-pts">
					<Typography variant="input_semi_bolt">Set pts</Typography>
					<SerieInfoSection InfoNumber={Set_pts} />
				</div>
			) : null}
		</div>
	)
}

export default Serie
