import { useEffect } from 'react';

// components
import Header from '../components/Header/Header';
import WidthContainer from '../components/WidthContainer/WidthContainer';
import Footer from '../components/Footer/Footer';

// utils
import { resizeAnimationStopper } from '../utils/resize-animation-stopper';

// styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Prevent janky animations on window resize
    const cleanupResizeEvent = resizeAnimationStopper();

    return () => cleanupResizeEvent();
  });

  return (
    <>
      <Header />
      <WidthContainer>
        <Component {...pageProps} />
      </WidthContainer>
      <Footer />
    </>
  );
}

export default MyApp;
