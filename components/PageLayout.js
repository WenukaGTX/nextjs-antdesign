import { Layout } from 'antd';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export const siteTitle = 'Home page';

export default function PageLayout({ children, home }) {
    return <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Website description goes here"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>;
}