import HomeComponent from '@/components/HomeComponent';
import Head from 'next/head';

export default function Home() {

  return (
    <main>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeComponent />
    </main>
  )
}