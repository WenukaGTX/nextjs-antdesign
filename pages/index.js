import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import PageLayout, { siteTitle } from '../components/PageLayout';
import { getSortedPostsData } from '../lib/posts';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';

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
    <PageLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner />
      <section className='section'>
        <h2 className='sectionTitle'>Projects <Link href={`/`}>See all</Link></h2>
        <Row gutter={16}>
          {allPostsData.map(({ id, date, title, cover }) => (
            <Col span={12} key={id}>
              <Card
                bordered={false}
                hoverable
                cover={
                  <Image
                    src={`/images/posts/${cover}.png`}
                    height={144}
                    width={144}
                    alt="Profile picture"
                  />
                }
              >
                <p>{id}</p>
                <p>{date}</p>
                <Link href={`/posts/${id}`}>{title}</Link>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </PageLayout>
  )
}
