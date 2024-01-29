import Head from 'next/head';
import React from 'react';
import Main from '@/components/adminComponents/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Milonga city</title>
        <meta name="description" content="Milonga city" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-3xl w-full h-screen flex justify-center items-center">
        <Main />
      </section>
    </>
  );
}
