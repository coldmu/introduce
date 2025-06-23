'use client';
import Image from 'next/image';
import styles from '../FloatingClouds.module.css';

const FloatingClouds = () => {
    return (
        <div className={styles.cloudContainer}>
            <Image src="/invitation/assets/cloud.png" alt="cloud1" width={150} height={90} className={styles.cloud1} />
            <Image src="/invitation/assets/cloud2.png" alt="cloud2" width={170} height={95} className={styles.cloud2} />
        </div>
    );
};

export default FloatingClouds;
