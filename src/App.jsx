import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Sky from './sections/Sky';
import Land from './sections/Land';
import Sea from './sections/Sea';
import SectionNav from './components/SectionNav';
import Divider from './components/Divider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <main
        className={`${
          loading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-1000
          h-screen overflow-y-scroll`}
      >
        <Sky />
        <Divider type="flight" /> {/* clouds between Sky and Land */}
        <Land />
        <Divider type="dive" /> {/* wave between Land and Sea */}
        <Sea />
        <SectionNav />
      </main>
    </>
  );
}

export default App;
