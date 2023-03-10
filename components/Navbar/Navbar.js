import { Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const { Header } = Layout;

export default function Navbar() {
    return (
        <Header className={styles.navbar}>
            <Image
                src="images/applied-alimni-logo-horz.svg"
                height={40}
                width={110}
                alt="logo"
                className={styles.websiteLogo}
            />
            <div className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/profile/profile">About</Link>
                <Link href="/profile/profile">My profile</Link>
                <Link href="/events/events">Events</Link>
            </div>
        </Header>
    )
}