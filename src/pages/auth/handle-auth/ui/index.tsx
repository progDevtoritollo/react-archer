import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import PageLoader from '@/features/PageLoader'
import { SetLoggedIn } from '@/entities/session/model/slice'

export const HandleAuth: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const getParam = () => {
		const urlParams = new URLSearchParams(window.location.search)
		const codeParamEncoded = urlParams.get('code')
		if (typeof codeParamEncoded === 'string') {
			const codeParamDecoded = encodeURIComponent(codeParamEncoded)
			return codeParamDecoded
		}
	}

	const getTokenUrl = async () => {
		const codeParam = getParam()
		const response = await axios.get(
			`http://localhost:8080/api/auth/google/callback?code=${codeParam}`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
		return response.data
	}

	const { status, isError, isSuccess } = useQuery({ queryKey: ['token'], queryFn: getTokenUrl })

	if (status === 'success') {
		console.log(isSuccess, status)
		dispatch(SetLoggedIn(true))
		navigate('/')
	}

	console.log(status)

	// if (isSuccess) {
	// 	dispatch(SetLoggedIn(true))
	// 	navigate('/')
	// }

	if (isError) return <div>Error</div>

	return <PageLoader />
}
