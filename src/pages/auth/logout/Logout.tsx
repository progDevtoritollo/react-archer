import { useEffect, FC } from 'react'
import { useNavigate } from 'react-router-dom'
// import { logout as logoutAction } from '@/redux/auth/actions';
import PageLoader from '@/features/PageLoader'

const Logout: FC = () => {
	const navigate = useNavigate()
	// function asyncLogout() {
	//   dispatch(logoutAction());
	// }
	useEffect(() => {
		// asyncLogout();
		window.sessionStorage.removeItem('isLoggedIn') //? change to sessionStorage
		window.localStorage.removeItem('auth') //? change to sessionStorage
		navigate('/auth/signin')
		// cookie.remove('auth_JWT') useCookie  how del cookie with flag httpOnly
	}, [])

	return <PageLoader />
}
export default Logout
