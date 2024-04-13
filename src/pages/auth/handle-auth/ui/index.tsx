import { FC, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PageLoader from '@/widgets/PageLoader'
import { setLoggedIn } from '@/entities/session/model/slice'

import { getToken } from '@/entities/session/api/get-token'

export const HandleAuth: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isError, isSuccess } = useQuery({ queryKey: ['token'], queryFn: getToken })

	useEffect(() => {
		if (isSuccess) {
			dispatch(setLoggedIn(true))
			navigate('/user/settings')
		}
	}, [isSuccess, dispatch, navigate])

	if (isError) return <div>Error</div>

	return <PageLoader />
}
