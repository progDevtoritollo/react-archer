// import { selectContestData } from 'entities/contest/model/selectors';
import { FC } from 'react'

import Serie from '@/entities/serie/serie-row/ui'

import './index.scss'
import { Shot, contestTypeEnum } from '@/entities/contest/types'

interface Props {
	shots: Shot[]
	contestType: contestTypeEnum
}

const RoundTable: FC<Props> = ({ shots, contestType }) => {
	const shotSeries = []
	for (let i = 0; i < 30; i += 3) {
		shotSeries.push(shots.slice(i, i + 3))
	}

	return (
		<div className="round-table">
			{shotSeries.map((series, i) => (
				<Serie
					key={i}
					seriesNumber={i + 1}
					firstShot={series[0]?.score}
					secondShot={series[1]?.score}
					thirdShot={series[2]?.score}
					contestType={contestType}
				/>
			))}
		</div>
	)
}

export default RoundTable
