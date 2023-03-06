import PageLayout from '../../components/PageLayout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <PageLayout>
            <Image
                src={`/images/posts/${postData.cover}.png`}
                height={144}
                width={800}
                alt={postData.title}
            />
            <section className='section'>
                <Head>
                    {postData.title}
                </Head>
                <h1>{postData.title}</h1>
                <p>{postData.id}</p>
                <p>{postData.date}</p>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </section>
        </PageLayout>
    );
}