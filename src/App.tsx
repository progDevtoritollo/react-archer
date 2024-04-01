import { Fragment, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

// import EntererComponent from '@/app/router/EntererComponent'
import PageLoader from '@/features/PageLoader'
import './App.css'

import { withProviders } from '@/app/providers/index'
import UserSettings from './pages/user-settings/ui'

const App = () => {
	return (
		<Fragment>
			<Toaster />
			<Suspense fallback={<PageLoader />}>
				{/* <EntererComponent /> */}
				<UserSettings />
			</Suspense>
		</Fragment>
	)
}

export default withProviders(App)
