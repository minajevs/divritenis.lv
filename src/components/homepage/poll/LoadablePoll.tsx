import React from 'react'
import Loadable from 'react-loadable'

export const LoadablePoll = Loadable({
	loader: () => import('./index'),
	loading: () => <div className="is-loading"></div>,
	delay: 100
})

export default LoadablePoll
