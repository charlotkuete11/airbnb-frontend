import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Styles from "./header.module.css";

export const Header = () => {
    let [subMenu, setSubMenu] = useState(false);


  return (
    <div className={Styles.navContainer}>
        <div className={Styles.nav}>
            <ul className={Styles.nav_items}>
                <li className={Styles.brand}>
                    <Link href="/" className={Styles.brandLink}>
                        <div className={Styles.imgBckImage}></div>
                    </Link> 
                </li>
                <li className={Styles.nav_item}>
                    <div className={Styles.searchBlock}>
                        <ul>
                            <li>
                                N&#39;importe ou
                            </li>
                            <li>
                                Une semaine
                            </li>
                            <li>
                                Ajouter des voyageur
                            </li>
                            <li>
                                <span>
                                    <img src='/magnifying-glass-solid-white.svg' width="20px" height="14px"/>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.otherMenu}>
                        <ul>
                            <li>
                                <Link href="#">Mettre mon logement sur Airbnb</Link>
                            </li>
                            <li>
                                <Link href="#" className={Styles.langues}>
                                    <img src="/globe-solid.svg" width="20px" height="14px"/>
                                </Link>
                            </li>
                            <li onClick={() => setSubMenu(!subMenu)}>
                            <Image alt="" src="/bars-solid.svg" width={20} height={12}/>
                                <Image alt="" src="/circle-user-solid.svg" width={20} height={18}/>

                                {
                                    subMenu && (
                                        <ol className={Styles.links}>
                                            <li>
                                                <Link href="">Inscription</Link>
                                            </li>
                                            <li>
                                                <Link href="">Connexion</Link>
                                            </li><hr/>
                                            
                                            <li>
                                                <Link href="">Mettre mon logement sur Airbnb</Link>
                                            </li>
                                            <li>
                                                <Link href="">Créer une expérience</Link>
                                            </li>
                                            <li>
                                                <Link href="">Aide</Link>
                                            </li>
                                        </ol>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>  
  )
}
