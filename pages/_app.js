import '../styles/globals.css';
import '../styles/mdStyles.css';
import '../styles/custom.css';
import Layout from '../components/Layout';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6X0CZ3JPJS"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-6X0CZ3JPJS');
          `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
