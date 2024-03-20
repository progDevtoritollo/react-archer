import { Routes, Route } from 'react-router-dom'
import { lazy, FC } from 'react'

const Logout = lazy(() => import('@/pages/auth/logout/Logout'))
import { HandleAuth } from '@/pages/auth/handle-auth/ui'
import { LoginRegister } from '@/pages/auth/LoginRegister'
import PublicRoute from './PublicRoute'

const AuthRouter: FC = () => {
	return (
		<Routes>
			<Route element={<LoginRegister />} path="/auth/signin" />
			<Route element={<Logout />} path="/auth/logout" />
			{/* <Route element={<HandleAuth />} path="/auth/handle/google" /> */}
			{/* <Route element={<HandleAuth />} path="/auth/handle/apple" /> */}
			<Route element={<HandleAuth />} path="/auth/handle" />
			<Route element={<PublicRoute />} path="*" />
		</Routes>
	)
}

export default AuthRouter
