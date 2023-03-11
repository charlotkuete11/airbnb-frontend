import {React, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import placeService from '../../../services/place.service';
import styles from "./index.module.css";
import {Header} from "../../../components/Header"
import {OtherFooter} from '../../../components/OtherFooter'
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Index = () => {
    const [data, setPlace] = useState(null);
    const [imgModal, setImgModal] = useState(false);

    let router = useRouter();

    useEffect(()=>{
        if(router.isReady){
        placeService.getPlaceById(router.query.id)
            .then(res => {
            setPlace(res.obj);
            console.log(data)
        })
        }
    }, [router.isReady]);

  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.main}>
            <div className={styles.block1}>
              <div className={styles.titleBlock}>
                <div className={styles.title}>{data && data.title}</div>
                <div className={styles.labelBlock}>
                  <ul>
                    <li>
                      <Image src="/star.png" height={13} width={13} alt="" className={styles.icon}/>
                      <span>5,0</span>
                    </li>
                    <li>
                      19 commentaires
                    </li>
                  </ul>
                  <span className={styles.styleSpan}>
                    <Image src="/heart.png" height={15} width={15} alt="" className={styles.icon}/>
                    <span>Enregistrer</span>
                  </span>
                </div>
              </div>
              <div className={styles.imgBlock}>
                <div className={styles.imgs}>
                  {
                    data && data.images.slice(0,5).map((img, i) => (
                      <>
                        <img src={img} key={i} className={styles.img} alt=""  onClick={() => setImgModal(true)}/> 
                      </>
                    ))
                  }
                </div>
                <div className={styles.showAll}  onClick={() => setImgModal(true)}>
                  <Image src="/menu.png" height={15} width={15} alt="" />
                  <span>Afficher toutes les photos</span>
                </div>
              </div>
            </div>
            <div className={styles.block2}>

            </div>
            <div className={styles.block3}>

            </div>
        </div>
        <OtherFooter/>

        {
          imgModal && (
            <div className={styles.imgModal}>
              <div className={styles.header}>
                <span className={styles.chevron}> 
                  <Image src='/lessThan.png' width={15} height={15} className={styles.img} alt="" onClick={() => setImgModal(false)}/>
                </span>
                <span className={styles.styleSpan}>
                  <Image src="/heart.png" height={15} width={15} alt="" className={styles.icon}/>
                  <span>Enregistrer</span>
                </span>
              </div>
              <div className={styles.container}>
                <Swiper
                  slidesPerView={1}
                  navigation
                  pagination={{clickable:true}}
                  onSwiper={swiper => console.log(swiper)}
                  className={styles.swiper}
                >
                  {
                    data && data.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <Image src={img} alt="" layout="fill" className={styles.image}/>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
          )
        }
    </div>
  )
}


export default Index;