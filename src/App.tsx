import { Fragment, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import EntererComponent from '@/pages/EntererComponent'
import PageLoader from '@/features/PageLoader'
import './App.css'

import { withProviders } from '@/app/providers/index'

window.localStorage.setItem('isLoggedIn', 'true')

const App = () => {
	return (
		<Fragment>
			<Toaster />
			<Suspense fallback={<PageLoader />}>
				<EntererComponent />
			</Suspense>
		</Fragment>
	)
}

export default withProviders(App)
