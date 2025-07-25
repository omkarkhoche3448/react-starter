import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <nav className="flex justify-end mb-8">
        <ThemeToggle />
      </nav>
      <main>
        <h1 className="text-3xl font-bold">Hello world!</h1>
      </main>
    </div>
  );
}

export default App;
