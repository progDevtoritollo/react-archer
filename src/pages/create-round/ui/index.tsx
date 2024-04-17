// import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import toast from 'react-hot-toast'

// import { TripleTarget } from '@/shared/ui/targets/triple-target'
import { FullTarget } from '@/shared/ui/targets/full-target'
import WithShots from '@/widgets/shot-rendering-hoc/ui'
import RoundTable from '@/widgets/round-table/ui'
// const TripleTargetShotWrapper = WithShots(TripleTarget)
const FullTargetShotWrapper = WithShots(FullTarget)

import { selectContest } from '@/entities/contest/model/selectors'
import { usePostRound } from '@/features/modify-round/api/modify-user-settings'

const RoundPage: React.FC = () => {
	const { shots, totalScore, distance, contestType } = useSelector(selectContest)
	const { mutateAsync: mutateRound, isSuccess, isError } = usePostRound()

	if (isSuccess) {
		toast.success('Your round has saved')
	} else if (isError) {
		toast.error('Error... something went wrong ')
	}

	const postRoundContest = () => {
		mutateRound({ shots, totalScore, distance })
	}

	return (
		<Box>
			<Box>
				<FullTargetShotWrapper
					contestType={contestType}
					shots={shots}
					postRoundContest={postRoundContest}
				/>
			</Box>
			<Box>
				<RoundTable shots={shots} contestType={contestType} />
			</Box>
		</Box>
	)
}

export default RoundPage
