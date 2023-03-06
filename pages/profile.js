import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from './Profile.module.scss';
import { clsx } from 'clsx';

export default function Profile({ type = 'success' }) {
  return (
    <Layout profile>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.headline}>Profile</h1>
        <p className={clsx({
          [styles.success]: type === 'success',
          [styles.error]: type === 'error',
        })}>{type}</p>
        <Image
          src="/images/profile-picture.jpg"
          height={144}
          width={144}
          alt="Profile picture"
        />
      </main>
    </Layout>
  )
}
