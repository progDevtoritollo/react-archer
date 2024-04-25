import { lazy, FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicRoute from '@/app/router/PublicRoute'
import PageLayout from '@/app/layout/PageLayout'
import RoundPage from '@/pages/create-round/ui'
import UserSettings from '@/pages/user-settings/ui'
import Activity from '@/pages/activity/ui'
const TestPage = lazy(() => import('@/pages/TestPage'))
const NotFound = lazy(() => import('@/pages/404/ui/NotFound'))
const Logout = lazy(() => import('@/pages/auth/logout/Logout'))

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<div>Home</div>} />
				<Route path="/test" element={<TestPage />} />
				<Route path="/dashboard" element={<div>Dashboard</div>} />
				<Route path="activity" element={<Activity />} />
			</Route>
			<Route path="/user/" element={<PageLayout />}>
				<Route path="settings" element={<UserSettings />} />
				<Route path="notifications" element={<h5>Notifications</h5>} />
				<Route path="friends" element={<h5>Friends</h5>} />
				<Route path="statistic" element={<h5>Statistic</h5>} />
			</Route>

			<Route path="/create/" element={<PageLayout />}>
				<Route path="quick-round" element={<RoundPage />} />
				<Route path="duel" element={<div>Create Duel</div>} />
				<Route path="competition" element={<div>Competition</div>} />
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
