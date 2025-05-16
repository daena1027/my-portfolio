import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Matches fade
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      {/* Actual site content */}
      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <h1 className="text-4xl text-center mt-10">Daena Peov 🌍</h1>
        {/* Later: <Sky />, <Land />, <Sea /> */}
      </main>
    </>
  );
}

export default App;
