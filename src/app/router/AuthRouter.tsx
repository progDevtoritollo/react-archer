import { Routes, Route } from 'react-router-dom'
import { lazy, FC } from 'react'

const Logout = lazy(() => import('@/pages/Logout'))
import { LoginRegister } from '@/pages/LoginRegister'
import PublicRoute from './PublicRoute'

const AuthRouter: FC = () => {
	return (
		<Routes>
			<Route element={<LoginRegister />} path="/auth/signin" />
			<Route element={<Logout />} path="/auth/logout" />
			<Route element={<PublicRoute />} path="*" />
		</Routes>
	)
}

export default AuthRouter
