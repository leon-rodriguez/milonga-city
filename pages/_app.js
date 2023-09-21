import '../styles/globals.css';
import '../styles/mdStyles.css';
import '../styles/custom.css';

import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
