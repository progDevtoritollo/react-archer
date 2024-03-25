import { lazy, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import PublicRoute from '@/app/router/PublicRoute'
import PageLayout from '@/app/layout/PageLayout'
import RoundPage from '@/pages/create-round/ui'
import UserSettings from '@/pages/user-settings/ui'
const TestPage = lazy(() => import('@/pages/TestPage'))
const NotFound = lazy(() => import('@/pages/404/ui/NotFound'))
const Logout = lazy(() => import('@/pages/auth/logout/Logout'))

import { URL_GET_IS_AUTH } from '@/app/config/config_API'
import { SetLoggedIn } from '@/entities/session/model/slice'
import PageLoader from '@/features/PageLoader'

const getAuthCheck = async () => {
	const response = await axios.get(URL_GET_IS_AUTH, {
		withCredentials: true,

		headers: {
			'Content-Type': 'application/json',
		},
	})
	return response.data
}

const AppRouter: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isError, isPending } = useQuery({ queryKey: ['getHello'], queryFn: getAuthCheck })

	if (isPending) {
		return <PageLoader />
	}
	if (isError) {
		{
			dispatch(SetLoggedIn(false))
			navigate('/auth/signin')
		}
	}

	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<div>Home</div>} />
				<Route path="/test" element={<TestPage />} />
				<Route path="/dashboard" element={<div>Dashboard</div>} />
				<Route path="/quick-round" element={<RoundPage />} />
			</Route>
			<Route path="/user/" element={<PageLayout />}>
				<Route path="settings" element={<UserSettings />} />
				<Route path="notifications" element={<h5>Notifications</h5>} />
			</Route>
			<Route path="/auth/">
				<Route path="signin" element={<PublicRoute />} />
				<Route path="logout" element={<Logout />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRouter
