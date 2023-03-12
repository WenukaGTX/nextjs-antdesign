import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import styles from './Banner.module.scss';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContents}>
                <h1>Alumni Association of APPSC, SUSL</h1>
                <p>Join the Alumni today & get along with the bright alumni members</p>
                <div className='flex alignCenter gap2'>
                    <Button type="primary" icon={<UserAddOutlined />} size="large">Register now</Button>
                </div>
            </div>
            <Image
                src="/images/banner-image.png"
                height={300}
                width={290}
                alt="Banner image"
            />
        </div>
    )
}
