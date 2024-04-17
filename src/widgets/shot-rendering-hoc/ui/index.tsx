import { useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Box, Backdrop } from '@mui/material'
import {
	addShot,
	delLastShot,
	clearContestList,
	setTotalScore,
	setDistance,
} from '@/entities/contest/model/slice'
import { Shot, contestTypeEnum } from '@/entities/contest/types'

import './index.scss'
import Bullet from '@/shared/ui/bullet'
import Button from '@/shared/ui/button'

interface Props {
	shots: Shot[]
	contestType: contestTypeEnum
	postRoundContest: () => void
}

const WithShots = (Target: React.ComponentType<any>) => {
	const WithShots: FC<Props> = ({ shots, contestType, postRoundContest }) => {
		const dispatch = useDispatch()
		const [bullet, setBullet] = useState<Shot[]>([])

		const [isContestEnded, setContestEnded] = useState(false)

		// modal window &&  ContestScore
		const [isModalOpen, setIsModalOpen] = useState(false)
		const [ContestScore, setContestScore] = useState(0)

		const handleOpen = () => setIsModalOpen(true)
		const handleClose = () => {
			setBullet([])
			dispatch(clearContestList())
			setIsModalOpen(false)
			setContestEnded(false)
			postRoundContest()
		}
		const handleButtonClickUndoLast = () => {
			let bulletWithoutLast = bullet.slice(0, -1)

			setBullet(bulletWithoutLast)
			dispatch(delLastShot())
			setContestEnded(false)
		}

		const handleButtonClickChangeTarget = () => {
			setBullet([])
		}

		const handleButtonClickFinishContest = () => {
			// calculate ContestScore
			let ShotsSum = 0
			// for (let i = 0; i < shots.length; i++) {
			// 	ShotsSum += shots[i].score
			// }
			// setContestScore(Math.round(ShotsSum));
			setContestScore(ShotsSum)
			setTotalScore(ShotsSum)

			setIsModalOpen(true)

			// contest request
		}
		const handleButtonClickSurrender = () => {
			setBullet([])
			dispatch(clearContestList())
		}

		const shotHandleClick = (e: any) => {
			let contestLengthOfShots = contestType == contestTypeEnum.ROUND ? 30 : 5

			if (shots.length >= contestLengthOfShots) {
				handleOpen()
			}

			const newShot = {
				shotNumber: bullet.length + 1,
				x: e.nativeEvent.offsetX - 5,
				y: e.nativeEvent.offsetY - 5,
				score: +e.target.getAttribute('id'),
			}
			setBullet([...bullet, newShot])
			dispatch(addShot(newShot))
		}

		const handleSelectionDistance = (event: React.ChangeEvent<HTMLSelectElement>) => {
			setDistance(+event.target.value)
		}

		return (
			<div className="target">
				<Modal
					open={isModalOpen}
					onClose={handleClose}
					slots={{ backdrop: Backdrop }}
					slotProps={{
						backdrop: {
							timeout: 500,
						},
					}}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<Box
						sx={{
							position: 'absolute' as 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 400,
							bgcolor: 'background.paper',
							border: '2px solid #000',
							boxShadow: 24,
							p: 4,
						}}>
						<p>Contest score: {ContestScore}</p>
						<p>distance add to request by custom selection</p>
						<label>Choose a distance:</label>
						<select onChange={handleSelectionDistance} name="distance" id="distance">
							<option value="18">18</option>
							<option value="60">60</option>
							<option value="70">70</option>
							<option value="90">90</option>
						</select>
						<p>Some contents info...</p>
					</Box>
				</Modal>
				<div className="target-with-shots-hoc" style={{ position: 'relative' }}>
					<Target shotEvent={shotHandleClick} />
					{bullet.map(value => {
						return <Bullet value={value} key={crypto.randomUUID()} />
					})}
				</div>
				<div className="target__bottom-interaction">
					{isContestEnded ? (
						<Button
							paddingSide={'20px'}
							onClick={handleButtonClickFinishContest}
							text="Finish"
							type={'usual'}
						/>
					) : (
						<Button onClick={handleButtonClickSurrender} text="Surrender" type={'surrender'} />
					)}

					<Button onClick={handleButtonClickChangeTarget} text="Clear target" type={'blue'} />
					<Button onClick={handleButtonClickUndoLast} text="Undo last" type={'undo'} />
				</div>
			</div>
		)
	}
	return WithShots
}

export default WithShots
