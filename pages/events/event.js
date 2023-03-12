import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import styles from './Event.module.scss';

export default function Event({ type = 'success' }) {
  return (
    <PageLayout event>
      <Head>
        <title>Event</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.headline}>Event 01</h1>
        <p>https://nextjsconf-pics.vercel.app/</p>
      </main>
    </PageLayout>
  )
}
