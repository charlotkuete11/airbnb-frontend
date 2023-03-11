import Link from 'next/link'
import React from 'react'
import styles from './index.module.css'
import {CustomFooter} from '../CustomFooter';

export const OtherFooter = () => {
    const menu = [
        `Arbin`,
        `Grenoble`,
        `Annecy`,
        `Genève`,
        `Lyon`,
        `Chamonix`,
        `Lausanne`,
        `Montreux`,
        `Pron`,
        `Turin`,
        `Zermatt`,
        `Provence`
    ]
  return (
    <div className={styles.otherFooterContainer}>
        <div className={styles.firstBlock}>
            <p className={styles.title}>
                Découvrez d&#8217;autres possibilités d&#8217;hébergement ⋅ Novalaise et ses environs
            </p>
            <ul>
                {
                    menu.map((item, i) => (
                        <li key={i}>
                            <Link href="#">{item}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className={styles.secondBlock}>
            <CustomFooter/>
        </div>
        <div className={styles.lastBlock}>
                
        </div>
    </div>
  )
}
