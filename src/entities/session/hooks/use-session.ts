import { useAppSelector } from '@/app/store/hooks/redux-hook'

export function useSession() {
	const { isLoggedIn } = useAppSelector(state => state.session)

	return {
		isLoggedIn,
	}
}
