import { Fragment, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'

import EntererComponent from '@/app/router/EntererComponent'
import PageLoader from '@/widgets/PageLoader'
import './App.css'

import { withProviders } from '@/app/providers/index'

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
