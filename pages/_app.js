// pages/_app.js
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import InitialLoader from '@/components/Loader';

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // loader for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <InitialLoader />;

  return <Component {...pageProps} />;
}

export default App;
