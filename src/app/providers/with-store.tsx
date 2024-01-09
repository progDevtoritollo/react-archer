import { Provider } from 'react-redux'
// I don't like that we pass store here but whatever
import { store } from '@/app/store'
console.log(store, 'reduxToolKit')

export const withStore = (component: () => JSX.Element) => () => <Provider store={store}>{component()}</Provider>