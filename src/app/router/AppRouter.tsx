import { lazy, FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicRoute from '@/app/router/PublicRoute'
const TestPage = lazy(() => import('@/pages/TestPage'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Logout = lazy(() => import('@/pages/Logout'))
const PageLayout = lazy(() => import('@/app/layout/PageLayout'))

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<PageLayout />}>
				<Route
					index
					element={<div>Home</div>}
				/>
				<Route
					path='/test'
					element={<TestPage />}
				/>
				<Route
					path='/dashboard'
					element={<div>Dashboard</div>}
				/>
			</Route>

			<Route
				path='/login'
				element={<PublicRoute />}
			/>
			<Route
				path='/logout'
				element={<Logout />}
			/>

			<Route
				path='/landing'
				element={<div>Landing Page</div>}
			/>

			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	)
}

export default AppRouter
