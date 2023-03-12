import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import Link from 'next/link';
import styles from './Event.module.scss';

export default function Events({ type = 'success' }) {
  return (
    <PageLayout event>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.headline}>Events</h1>
        <Link href="/events/event">Event 01</Link>
      </main>
    </PageLayout>
  )
}
