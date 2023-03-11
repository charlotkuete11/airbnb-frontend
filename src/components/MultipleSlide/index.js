import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./index.module.css";

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export const MultipleSlide = () => {
  const types = [
    { selected: false, id: 1, label: "Avec vue", image: "/appartment_types/avecVue.png"},
    { selected: false, id: 2, label: "Bord de mer", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 3, label: "Campagne", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 4, label: "Golf", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 5, label: "Vignobles", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 6, label: "Au pied des pistes", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 7, label: "Luxe", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 8, label: "Piscine", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 9, label: "Domes", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 10, label: "Grande demeures", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 11, label: "Wow", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 12, label: "Bateaux", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 13, label: "Cabanes perchées", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 14, label: "Tendance", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 15, label: "Cabanes", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 16, label: "Fermes", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 17, label: "Tiny house", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 18, label: "Design", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 19, label: "Iles", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 20, label: "Chateaux", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 21, label: "Bord de lac", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 22, label: "Chambres privée", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 23, label: "Espace de jeux", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 24, label: "séjours déconnectés", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 25, label: "Sur l'eau", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 26, label: "Patrimoine", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 27, label: "Maisons organiques", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 28, label: "Sous les tropiques", image: "/appartment_types/avecVue.png" },
    { selected: false, id: 29, label: "Lacs", image: "/appartment_types/avecVue.png" }
  ]
  let setToFalse = () =>{
    types.map(type => {
      type.selected = false;
      return type;
    })
  }
  let setActive = (id) => {
    const i = id -1;
    console.log(i)
    setToFalse();
    types.map(type => {
      if(type.id == i){
        type.selected = true;
      }
      return type;
    })
  }
  return (
    <Swiper
        spaceBetween={10}
        slidesPerView={11}
        slidesPerGroup={11}
        navigation
        onSwiper={swiper => console.log(swiper)}
        className={styles.swiper}
    >
        {
          types.map(type => {
            return (
              <>
                {
                  type.selected == true ? (
                    <SwiperSlide key={type.id} className={`${styles.slide} ${styles.active}`} >
                      <Image src={type.image} alt={type.label} height={18} width={18} className={styles.image}/>
                      <p className={styles.label}>{type.label}</p> jf
                  </SwiperSlide>
                  ) : (
                    <SwiperSlide key={type.id} className={styles.slide} onClick={() => {setActive(type.id)}}>
                      <Image src={type.image} alt={type.label} height={18} width={18} className={styles.image}/>
                      <p className={styles.label}>{type.label}</p>
                    </SwiperSlide>
                  )
                }
              </>
            )
          })
        }
    </Swiper>
  )
}
