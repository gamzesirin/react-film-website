import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/next'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<SpeedInsights />
		<App />
	</React.StrictMode>
)
