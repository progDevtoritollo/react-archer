// import { selectContestData } from 'entities/contest/model/selectors';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Serie from '@/entities/serie/serie-row'

import './index.scss'

const RoundTable = () => {
	// const { items } = useSelector(selectContestData);
	const shotSeries = [
		[
			{
				shotNumber: 1,
				x: 420,
				y: 239,
				score: 7,
			},
			{
				shotNumber: 2,
				x: 415,
				y: 202,
				score: 7,
			},
			{
				shotNumber: 3,
				x: 363,
				y: 195,
				score: 9,
			},
		],
		[
			{
				shotNumber: 4,
				x: 340,
				y: 254,
				score: 8,
			},
			{
				shotNumber: 5,
				x: 301,
				y: 248,
				score: 8,
			},
			{
				shotNumber: 6,
				x: 295,
				y: 288,
				score: 7,
			},
		],
		[
			{
				shotNumber: 7,
				x: 363,
				y: 280,
				score: 7,
			},
			{
				shotNumber: 8,
				x: 409,
				y: 238,
				score: 7,
			},
			{
				shotNumber: 9,
				x: 399,
				y: 183,
				score: 8,
			},
		],
		[
			{
				shotNumber: 10,
				x: 373,
				y: 152,
				score: 9,
			},
			{
				shotNumber: 11,
				x: 343,
				y: 131,
				score: 9,
			},
			{
				shotNumber: 12,
				x: 276,
				y: 164,
				score: 9,
			},
		],
		[
			{
				shotNumber: 13,
				x: 269,
				y: 196,
				score: 9,
			},
			{
				shotNumber: 14,
				x: 267,
				y: 279,
				score: 7,
			},
			{
				shotNumber: 15,
				x: 291,
				y: 320,
				score: 6,
			},
		],
		[
			{
				shotNumber: 16,
				x: 316,
				y: 326,
				score: 0,
			},
			{
				shotNumber: 17,
				x: 335,
				y: 319,
				score: 6,
			},
			{
				shotNumber: 18,
				x: 367,
				y: 288,
				score: 7,
			},
		],
		[
			{
				shotNumber: 19,
				x: 369,
				y: 260,
				score: 7,
			},
			{
				shotNumber: 20,
				x: 371,
				y: 223,
				score: 8,
			},
			{
				shotNumber: 21,
				x: 359,
				y: 188,
				score: 9,
			},
		],
		[
			{
				shotNumber: 22,
				x: 312,
				y: 167,
				score: 10,
			},
			{
				shotNumber: 23,
				x: 252,
				y: 128,
				score: 7,
			},
			{
				shotNumber: 24,
				x: 280,
				y: 102,
				score: 7,
			},
		],
		[
			{
				shotNumber: 25,
				x: 320,
				y: 103,
				score: 8,
			},
			{
				shotNumber: 26,
				x: 335,
				y: 112,
				score: 8,
			},
			{
				shotNumber: 27,
				x: 404,
				y: 140,
				score: 7,
			},
		],
		[
			{
				shotNumber: 28,
				x: 409,
				y: 174,
				score: 8,
			},
			{
				shotNumber: 29,
				x: 379,
				y: 198,
				score: 9,
			},
		],
	]
	// const shotSeries = []
	// for (let i = 0; i < shotSeries.length; i += 3) {
	// 	shotSeries.push(items.slice(i, i + 3))
	// }

	return (
		<div className="round-table">
			<div className="round-table__series">
				{shotSeries.map((series, i) => (
					<Serie
						key={i + 20}
						seriesNumber={i + 1}
						firstShot={series[0].score}
						secondShot={series[1]?.score}
						thirdShot={series[2]?.score}
						isDuel={false}
					/>
				))}
			</div>
		</div>
	)
}

export default RoundTable
