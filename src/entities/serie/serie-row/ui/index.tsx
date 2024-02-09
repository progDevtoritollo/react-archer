import { useState, useEffect, FC } from 'react'

import SerieInfoSection from '@/shared/ui/serie-info-section'
import ShotScore from '@/shared/ui/shot-score-box'

import { contestTypeEnum } from '@/entities/contest/types'

import './index.scss'

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
				<div className="whose">Opponent</div>
			) : isDuel ? (
				<div className="whose you">You</div>
			) : null}

			<div className="serie__series-number">
				{seriesNumber <= 1 ? <div className="title">Series num.</div> : null}

				<SerieInfoSection InfoNumber={seriesNumber <= 0 ? seriesNumber + 1 : seriesNumber} />
			</div>
			<div className="serie__shots-section">
				{seriesNumber <= 1 && !isOpponents ? <div className="title">Shots</div> : null}

				<div className="shots-section__shots-container">
					<ShotScore shotScore={firstShot} />
					<ShotScore shotScore={secondShot} />
					<ShotScore shotScore={thirdShot} />
				</div>
			</div>
			<div className="serie__series-score">
				{seriesNumber <= 1 ? <div className="title">Series score</div> : null}

				<SerieInfoSection InfoNumber={seriesScore} />
			</div>
			{isDuel ? (
				<div className="serie__set-pts">
					{/* <div className='title'>Set pts</div> */}
					<SerieInfoSection InfoNumber={Set_pts} />
				</div>
			) : null}
		</div>
	)
}

export default Serie
