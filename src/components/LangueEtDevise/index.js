import React from 'react'
import styles from './index.module.css';

export const LangueEtDevise = ({title, data}) => {
  return (
    <div className={styles.LangueEtDeviseContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.langues}>
          <ul>
            {
              data && data.map(item => {
                return (
                  <>
                    {
                      item.active == true ? (
                          <li className={styles.active}>
                            <span>{item.title}</span>
                            <span>{item.label}</span>
                          </li>
                      ) : (
                          <li>
                            <span>{item.title}</span>
                            <span>{item.label}</span>
                          </li>
                      )
                    }                      
                  </>
                )
              })
            }
          </ul>
        </div>
    </div>
  )
}
