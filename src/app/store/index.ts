import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// import notification from 'entities/notification/model/slice';
import contest from '@/entities/contest/model/slice'
import session from '@/entities/session/model/slice'
// import event from 'entities/event/model/slice';
// import user from 'entities/user/model/slice';
// import club from 'entities/club/model/slice';

export const store = configureStore({
	reducer: {
		session,
		contest,
		// notification,
		// event,
		// user,
		// club,
	},
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
