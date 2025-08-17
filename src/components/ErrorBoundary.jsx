import { Component } from 'react'
import { ERROR_MESSAGES, APP_CONFIG } from '@/lib'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Clean, minimal fallback UI following modern design principles
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
          <div className="w-full max-w-md space-y-6">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-destructive" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Error Message */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold tracking-tight">
                {ERROR_MESSAGES.ERROR_BOUNDARY_TITLE}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {ERROR_MESSAGES.ERROR_BOUNDARY_DESCRIPTION}
              </p>
            </div>
            
            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" 
                  />
                </svg>
                {ERROR_MESSAGES.ERROR_BOUNDARY_BUTTON}
              </button>
            </div>
            
            {/* Development Error Details */}
            {APP_CONFIG.IS_DEV && this.state.error && (
              <div className="mt-8 pt-6 border-t border-border">
                <details className="group">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors list-none flex items-center gap-2">
                    <svg 
                      className="w-4 h-4 transition-transform group-open:rotate-90" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {ERROR_MESSAGES.ERROR_BOUNDARY_DETAILS}
                  </summary>
                  <div className="mt-3 p-4 bg-muted rounded-md text-xs font-mono space-y-3">
                    <div>
                      <div className="text-muted-foreground mb-1">Error:</div>
                      <div className="text-destructive">{this.state.error.toString()}</div>
                    </div>
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <div className="text-muted-foreground mb-1">Component Stack:</div>
                        <pre className="text-destructive whitespace-pre-wrap text-xs leading-relaxed">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary