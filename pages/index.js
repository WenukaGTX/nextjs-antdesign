import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h1>Home page</h1>
      </main>
      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Blog</h2>
        <Row gutter={16}>
          {allPostsData.map(({ id, date, title }) => (
            <Col span={12}>
              <Card key={id} title={title} bordered={false}>
                <p>{id}</p>
                <p>{date}</p>
                <Link href={`/posts/${id}`}>{title}</Link>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  )
}
