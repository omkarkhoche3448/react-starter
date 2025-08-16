import { ThemeToggle } from '@/components/ThemeToggle'
import { cn, ANIMATION_DURATION, APP_CONFIG } from '@/lib'

function App() {
  return (
    <div
      // Using cn() utility for better className organization
      // This makes it easier to read and maintain conditional classes
      className={cn('min-h-screen p-4', 'bg-background text-foreground')}
      // Using ANIMATION_DURATION constant for consistent transitions
      // This ensures all animations across the app have the same timing
      style={{
        transition: `background-color ${ANIMATION_DURATION.NORMAL}ms ease-in-out, color ${ANIMATION_DURATION.NORMAL}ms ease-in-out`,
      }}
    >
      <nav className="flex justify-end mb-8">
        <ThemeToggle />
      </nav>
      <main className="max-w-4xl mx-auto">
        {/* Using APP_CONFIG constants instead of hardcoded strings */}
        {/* This makes it easy to update app info from one place */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Welcome to {APP_CONFIG.NAME}!
          </h1>
          <p className="text-lg text-muted-foreground">
            {APP_CONFIG.DESCRIPTION} - v{APP_CONFIG.VERSION}
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
