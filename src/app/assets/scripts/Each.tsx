import { Children, ReactNode } from 'react'

interface Props<T> {
	render: (item: T, index: number) => ReactNode
	of: []
}

export const Each = <T,>({ render, of }: Props<T>) =>
	Children.toArray(of.map((item, index) => render(item, index)))
