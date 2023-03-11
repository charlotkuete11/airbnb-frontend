/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import {Header} from "../components/Header"
import {HomeFooter} from '../components/HomeFooter'
import {Card} from '../components/Card'
import { MultipleSlide } from '../components/MultipleSlide';
import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';

import placeService from "../services/place.service";
import typeService from "../services/type.service";


export default function Home() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [minCapacite, setMinCapacite] = useState(1);
  const [maxCapacite, setMaxCapacite] = useState(20);
  const [typeFilterCriterial, setTypeFilterCriterial] = useState(null)
  const [filterCount, setFilterCount] = useState(0);
  const [activeFilterCriterialCount, setActiveFilterCriterialCount] = useState(0);
  const defaultPrice = [0, 4000];
  const defaultCapacite = [1, 20];
  

  const minPrixRef = useRef(null);

  let getData = () => {
    placeService.getAllPlaces()
        .then(res => {
          setData(res.obj.slice(2))
          setActiveFilterCriterialCount(res.obj.slice(2).length);
        })
  }
 
  let getTypes = () => {
    typeService.getAllTypes().then((res) => {
      setTypes(res.obj)
      console.log(res.obj)
    })
  }
  useEffect(() => {
    console.log(maxPrice)
    // if((minPrice == defaultPrice[0] && maxPrice == defaultPrice[1]) && (minCapacite == defaultCapacite[0] && maxCapacite == defaultCapacite[1])){
      getData();
    // }
    
    getTypes();
  }, [])

  useEffect(() => {
    filterBy()
  }, [minPrice, maxPrice, minCapacite, maxCapacite]);

  let clearFilters = () => {
    setMinPrice(defaultPrice[0])
    setMaxPrice(defaultPrice[1])
    setMinCapacite(defaultCapacite[0])
    setMaxCapacite(defaultCapacite[1])
    setTypeFilterCriterial(null)
    setFilterCount(0)

    getData();
  }
  let handlePrixMinKeyDown = (e: SyntheticEvent) => {
    if(parseInt(e.currentTarget.value) < 0){
      setMinPrice(defaultPrice[0])
    }else{
      setMinPrice(parseInt(e.currentTarget.value))
    }
  }

  let handlePrixMaxKeyDown = (e: SyntheticEvent) => {
    if(parseInt(e.currentTarget.value) < 0){
      setMaxPrice(defaultPrice[1])
    }else{
      setMaxPrice(parseInt(e.currentTarget.value))
    }
  }
  let handleCapaciteMinKeyDown = (e: SyntheticEvent) => {
    if(parseInt(e.currentTarget.value) < 0){
      setMinCapacite(defaultCapacite[0])
    }else{
      setMinCapacite(parseInt(e.currentTarget.value))
    }
  }

  let handleCapaciteMaxKeyDown = (e: SyntheticEvent) => {
    if(parseInt(e.currentTarget.value) < 0){
      setMaxCapacite(defaultCapacite[1])
    }else{
      setMaxCapacite(parseInt(e.currentTarget.value))
    }
  }
  let saveFilter = () => {
    var i = 0;
    if(minPrice != defaultPrice[0] || maxPrice != defaultPrice[1]){
      i = i + 1;
    }
    if(minCapacite != defaultCapacite[0] || maxCapacite != defaultCapacite[1]){
      i = i + 1;
    }

    if(i != 0){
      setFilterCount(i);
      setData(filterBy())
    }
    setFilter(false);
  }
  let filterBy = () => {
    if(typeFilterCriterial == null){
      let d = data.filter(x => {
        if((x['pricing']['perDay'] <= maxPrice && x['pricing']['perDay'] >= minPrice) && (x['capacity'] <= maxCapacite && x['capacity'] >= minCapacite)){
          return x;
        }
      })
      setActiveFilterCriterialCount(d.length)
      return d;
    }else{
      let newArray: Array<any> = typeFilterCriterial;
      let d = data.filter(x => {
        if((x['pricing']['perDay'] <= maxPrice && x['pricing']['perDay'] >= minPrice) && (x['capacity'] <= maxCapacite && x['capacity'] >= minCapacite) && newArray.includes(x['type']['name'])){
          return x;
        }
      })
      setActiveFilterCriterialCount(d.length)
      return d;
    }
  }
  
  return (
    <>
      <Header></Header>
      <div className={styles.slideContainer}>
        <div className={styles.slider}>
          <MultipleSlide/>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.filter} onClick={() => { setFilter(true);}}>
            <Image src="/filter.png" height={14} width={14} alt="" className={styles.filterImg}/> 
            <p className={styles.filterLabel}>Filtres</p>
          </div>  
          {
            filterCount != 0 && (
              <>
                <span className={styles.filterCountLabel}>{filterCount}</span>
              </>
              
            )
            
          }
          
        </div>
        
      </div>
      <div className={styles.main}>
        <div className={styles.cardContainer}>
          {
            data && data.map((data, index) => (
                <Card data={data} key={index}/>
            ))
          }
        </div>
      </div>
      <HomeFooter/>

      {
        filter && (
          <div className={styles.mainModalContainer}>
            <div className={styles.body}>
              <div className={styles.headers}>
                <span className={styles.close} onClick={() => setFilter(false)}>x</span>
                <span className={styles.title}>Filtres</span>
              </div>
              <div className={styles.mains}>
                <div className={styles.parPrix}>
                  <div className={styles.head}>
                    <span>Par fourchette de prix</span>
                    <span>Prix moyen par nuit est de 2000 €</span>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.input}>
                      <span>Prix min</span>
                      <input ref={minPrixRef} type="number" min="0" value={minPrice} onInput={handlePrixMinKeyDown}/>
                    </div>
                    <div className={styles.input}>
                      <span>Prix max</span>
                      <input type="number" value={maxPrice} onInput={handlePrixMaxKeyDown}/>
                    </div>
                  </div>
                </div>
                <div className={styles.parCapacite}>
                  <div className={styles.head}>
                    <span>Par Fourchete de Capacité</span>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.input}>
                      <span>Capacité min</span>
                      <input type="number" value={minCapacite} onInput={handleCapaciteMinKeyDown}/>
                    </div>
                    <div className={styles.input}>
                      <span>Capacité max</span>
                      <input type="number" value={maxCapacite} onInput={handleCapaciteMaxKeyDown}/>
                    </div>
                  </div>
                </div>
                
                {/* <div className={styles.parType}>
                  <div className={styles.head}>
                    <span>Par Type de logement</span>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.checkboxes}>
                      {
                        types && types.map(x => (
                          <div className={styles.checkBox} key={x['_id']}>
                            <input type="checkbox" value={x['name']} name={x['_id']} id={x['_id']} />
                            <label>{x['name']}</label>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div> */}
              </div>
              <div className={styles.footer}>
                <span onClick={() => clearFilters()}>Tout effacer</span>
                <span onClick={() => saveFilter()}>Afficher {activeFilterCriterialCount} logements</span>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
