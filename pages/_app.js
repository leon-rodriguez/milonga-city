import '../styles/globals.css';
import '../styles/mdStyles.css';
import '../styles/custom.css';
import Layout from '../components/Layout';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Milonga City" />
        <meta
          property="og:description"
          content="Discover the magic of tango with our exclusive services. Authentic classes, unforgettable events, and unique experiences in the heart of tango. Immerse yourself in the passion and elegance of the world's most passionate dance!"
        />
        <meta
          property="og:image"
          content="https://milonga.city/Images/bailarines.jpg"
        />
        <meta property="og:url" content="milonga.city" />
        {/* Otras meta etiquetas si es necesario */}
      </Head>
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
