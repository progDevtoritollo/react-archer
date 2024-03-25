import { FC, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import PageLoader from '@/features/PageLoader'
import { SetLoggedIn } from '@/entities/session/model/slice'

import API_URL from '@/app/config/config_API'

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
	const response = await axios.get(API_URL + `/auth/google/callback?code=${codeParam}`, {
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response.data
}

export const HandleAuth: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isError, isSuccess } = useQuery({ queryKey: ['token'], queryFn: getTokenUrl })

	useEffect(() => {
		if (isSuccess) {
			//* make here isAuth request here '/api/hello'?
			dispatch(SetLoggedIn(true))
			navigate('/user/settings')
		}
	}, [isSuccess, dispatch, navigate])

	if (isError) return <div>Error</div>

	return <PageLoader />
}
