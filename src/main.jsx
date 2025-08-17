import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { APP_CONFIG, FEATURE_FLAGS } from '@/lib'

// Log configuration in development
if (APP_CONFIG.IS_DEV && FEATURE_FLAGS.DEBUG_MODE) {
  console.log('🔧 App Configuration:', APP_CONFIG)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
