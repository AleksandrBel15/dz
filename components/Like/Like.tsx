import Image from "next/image";
import { JSX } from "react";
import like from '../../public/like.svg';
import styles from './Like.module.css';

export default function Like(): JSX.Element {
    return <div className={styles.container}>
        <p>4</p>
        <Image src={like} alt="Иконка лайка" />
    </div>
}
