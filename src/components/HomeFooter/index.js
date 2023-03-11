import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CustomFooter } from '../CustomFooter';
import { LangueEtDevise } from '../LangueEtDevise';
import styles from './index.module.css';

export const HomeFooter = () => {
    let [customFooter, setCustomFooter] = useState(false)
    let [customLanguage, setCustomLanguage] = useState(false)
    let [customDevise, setCustomDevise] = useState(false)
    let languages = [
        { title: "Français", label:"France", active: true}, { title: "Bahasa indonesia", label:"Indonesia", active: false}, { title: "Bosanski", label:"Bosna i Hercegovina", active: false}, { title: "Dansk", label:"Danmark", active: false}, { title: "Deutsch", label:"Deustschland", active: false}, { title: "Eesti", label:"Eesti", active: false}, { title: "English", label:"Australia", active: false}, { title: "English", label:"Canada", active: false}, { title: "English", label:"India", active: false}, { title: "English", label:"United Kingdom", active: false}, { title: "English", label:"United States", active: false}, { title: "Español", label:"Argentina", active: false}, { title: "Español", label:"Bolivia", active: false}, { title: "Español", label:"Costa Rica", active: false}, { title: "Español", label:"Honduras", active: false}, { title: "Español", label:"Paraguay", active: false}, { title: "Français", label:"Belgique", active: false}, { title: "Français", label:"Canada", active: false}, { title: "Français", label:"Suisse", active: false}, { title: "Italiano", label:"Italia", active: false}, { title: "Malti", label:"Malta", active: false}, { title: "Polski", label:"Polska", active: false}, { title: "Suomi", label:"Suomi", active: false}, { title: "Tagalog", label:"Pilipinas", active: false}, { title: "Islanska", label:"Island", active: false}, { title: "Bahasa indonesia", label:"Indonesia", active: false}, { title: "Bosanski", label:"Bosna i Hercegovina", active: false}, { title: "Dansk", label:"Danmark", active: false}, { title: "Deutsch", label:"Deustschland", active: false}, { title: "Eesti", label:"Eesti", active: false}, { title: "English", label:"Australia", active: false}, { title: "English", label:"Canada", active: false}, { title: "English", label:"India", active: false}, { title: "English", label:"United Kingdom", active: false}, { title: "English", label:"United States", active: false}, { title: "Español", label:"Argentina", active: false}, { title: "Español", label:"Bolivia", active: false}, { title: "Español", label:"Costa Rica", active: false}, { title: "Español", label:"Honduras", active: false}, { title: "Español", label:"Paraguay", active: false}, { title: "Français", label:"Belgique", active: false}, { title: "Français", label:"Canada", active: false}, { title: "Français", label:"Suisse", active: false}, { title: "Italiano", label:"Italia", active: false}, { title: "Malti", label:"Malta", active: false}, { title: "Polski", label:"Polska", active: false}, { title: "Suomi", label:"Suomi", active: false}, { title: "Tagalog", label:"Pilipinas", active: false}, { title: "Islanska", label:"Island", active: false}
    ]
    let devises = [
        { title: "", label:"", active: false}
    ]
  return (
    <>
        <div className={styles.footer}>
            <div className={styles.firstBlock}>
                <ul>
                    <li>@ 2023 Airbnb, Inc. </li>
                    <li>
                        <Link href="#" className={styles.link}>Confidentialité</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>Conditions générales</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>Plan du site</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>Fonctionnement du site</Link>
                    </li>
                    <li>
                        <Link href="#" className={styles.link}>Infos sur l&#8217;entreprise</Link>
                    </li>
                    <li>
                        Destinations
                    </li>
                </ul>
            </div>
            <div className={styles.secondBlock}>
                <ul>
                    <li onClick={() => setCustomLanguage(true)}>
                        <Image src="/globe-solid.svg" alt="" height={15} width={20} className={styles.sbImg} />
                        <span>Français (FR)</span>
                    </li>
                    <li onClick={() => setCustomDevise(true)}>
                        <Image src="/euro.png" alt="" height={15} width={20} className={styles.sbImg} />
                        <span>EUR</span>
                    </li>
                    <li onClick={() => setCustomFooter(true)}>
                        <span>Assistance et ressources</span>
                        <Image src="/arrow-up.png" alt="" height={15} width={20} className={styles.sbImg} />
                    </li>
                </ul>
            </div>
        </div>
        {
            (customFooter || customLanguage || customDevise) && (
                <div className={styles.customFooterContainer} onClick={() => {setCustomFooter(false); setCustomLanguage(false);setCustomDevise(false);}}>
                    {
                        customFooter && (
                            <>
                                <div className={styles.cfElmtContainer}>
                                        <span className={styles.close} onClick={() => {setCustomFooter(false)}}>x</span>
                                        <CustomFooter/>
                                </div>  
                            </>
                        )
                    }
                    
                    {
                        customLanguage && (
                            <div className={styles.cfledContainer}>
                                {
                                    customLanguage && (
                                        <>
                                            <div className={styles.closeContainer}>
                                                <span className={styles.close} onClick={() => {setCustomLanguage(false)}}>x</span>
                                            </div>
                                            <hr/>
                                            <LangueEtDevise title="Choisissez une langue et une région" data={languages}/>
                                        </>
                                    )
                                }
                                
                                {
                                    customDevise && (
                                        <LangueEtDevise title="Choisissez une devise" data={devises}/>
                                    )
                                }
                            </div>
                        )   
                    }
                    
                      
                </div>
            )
        }
        
    </>
    
  )
}
