import { useAppSelector } from '@/app/store/hooks/redux-hook'

export function useUser() {
	const {
		image,
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
		image,
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
