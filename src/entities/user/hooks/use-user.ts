import { useAppSelector } from '@/app/store/hooks/redux-hook'

export function useSession() {
	const {
		name,
		surname,
		username,
		email,
		phoneNumber,
		birthday,
		archerLevel,
		bowXParameter,
		bowYParameter,
		bowBase,
	} = useAppSelector(state => state.user)

	return {
		name,
		surname,
		username,
		email,
		phoneNumber,
		birthday,
		archerLevel,
		bowXParameter,
		bowYParameter,
		bowBase,
	}
}
