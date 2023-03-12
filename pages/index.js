import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import PageLayout, { siteTitle } from '../components/PageLayout';
import { getSortedPostsData } from '../lib/posts';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

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
        <h2 className='sectionTitle'>Events <Link href={`/`}>See all</Link></h2>
        <Row gutter={16}>
          {allPostsData.map(({ id, date, title, cover }) => (
            <Col span={8} key={id}>
              <Card
                bordered={false}
                hoverable
                cover={
                  <Image
                    src={`/images/posts/${cover}`}
                    height={144}
                    width={144}
                    alt="Profile picture"
                  />
                }
                className='projectCard'
              >
                <Meta title={<Link href={`/posts/${id}`}>{title}</Link>} description={date} />
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </PageLayout>
  )
}
