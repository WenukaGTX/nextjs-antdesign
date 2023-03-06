import { Layout, Menu } from 'antd';
import styles from './Footer.module.scss';

const { Footer } = Layout;

export default function Navbar() {
    return (
        <Footer className={styles.footer}>
            Copyrights ©2023 @wenukagtx
        </Footer>
    )
}
