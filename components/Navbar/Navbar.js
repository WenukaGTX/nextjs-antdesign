import { Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const { Header } = Layout;

export default function Navbar() {
    return (
        <Header className={styles.navbar}>
            <Image
                src="/sketchfab-logo-text-white-mono.png"
                height={25}
                width={110}
                alt="logo"
                className={styles.websiteLogo}
            />
            <div className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
            </div>
        </Header>
    )
}
