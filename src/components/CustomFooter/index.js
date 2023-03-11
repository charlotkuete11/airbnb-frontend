import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

export const CustomFooter = () => {
    const menu = [
        [
            `Assistance`,
            `Centre d'aide`,
            `AirCover`,
            `Soutenir les personnes en situation de handicap`,
            `Options d'annulation`,
            `Nos mesures face au Covid-19`,
            `Signaler un problème de voisinage`
        ],
        [
            `Communauté`,
            `Airbnb.org : réponse aux catastrophes`,
            `Lutte contre la discrimination`
        ],
        [
            `Accueil de voyageurs`,
            `Mettez votre logement sur Airbnb`,
            `AirCover pour les hôtes`,
            `Ressources pour les hôtes`,
            `Forum de la communauté`,
            `Accueillir de manière responsable`
        ],
        [
            `Airbnb`,
            `Newsroom`,
            `En savoir plus sur les nouveautés`,
            `Lettre de nos fondateurs`,
            `Carrières`,
            `Investisseurs`,
            `Cartes cadeaux`
        ]
    ]
  return (
    <div className={styles.customFooter}>
        {
            menu.map((item, index) => {
                return (
                    <ul key={index}>
                        {
                            item.map((element, i) => {
                                return (
                                    i == 0 ? (
                                        <>
                                            <li>{element}</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link href="#">{element}</Link>
                                            </li>
                                        </>
                                    )
                                )
                            })
                        }
                    </ul>
                )
            })
        }
    </div>
  )
}



