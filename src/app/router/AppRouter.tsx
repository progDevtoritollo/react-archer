import { lazy, FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicRoute from '@/app/router/PublicRoute'
import PageLayout from '@/app/layout/PageLayout'
const TestPage = lazy(() => import('@/pages/TestPage'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Logout = lazy(() => import('@/pages/Logout'))

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<div>Home</div>} />
				<Route path="/test" element={<TestPage />} />
				<Route path="/dashboard" element={<div>Dashboard</div>} />
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
