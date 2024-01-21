import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import EntererComponent from '@/pages/EntererComponent'
import PageLoader from '@/features/PageLoader'
import './App.css'

import { withProviders } from '@/app/providers/index'

window.localStorage.setItem('isLoggedIn', 'true')

const App = () => {
	return (
		<>
			<Toaster />
			<Suspense fallback={<PageLoader />}>
				<EntererComponent />
			</Suspense>
		</>
	)
}

export default withProviders(App)
