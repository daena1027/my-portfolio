import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Sky from './sections/Sky';
import Land from './sections/Land';
import Sea from './sections/Sea';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <main className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Sky />
        <Land />
        <Sea />
      </main>
    </>
  );
}

export default App;
