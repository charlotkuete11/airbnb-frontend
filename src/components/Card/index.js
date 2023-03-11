import React, { useEffect } from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './card.module.css'

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image';
import Link from 'next/link';


SwiperCore.use([Navigation, Pagination, , A11y])

export const Card = ({data}) => {

    useEffect(() => {
        console.log(data)
    }, []);
  return (
        <div className={styles.card}>
            <Link href={`/places/${data._id}`}>
                <Swiper
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    onSwiper={swiper => console.log(swiper)}
                    className={styles.carousel}
                >
                    {
                        data.images.map((image, index) => (
                            <SwiperSlide key={index} className={styles.slideImgContainer}>
                                <Image src={image} alt={data.title} layout="fill" className={styles.slideImg} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={styles.content}>
                    <div className={styles.metadata}>
                        <p className={styles.title}>
                            {data.title}
                        </p>
                        <p className={styles.city}>
                            {data.adresse.city} / {data.type.name}
                        </p>
                        <p className={styles.prix}>
                            {data.pricing.perDay} € par nuit
                        </p>
                    </div>
                    <div className={styles.rate}>
                        <span>
                            {
                                data.rate && data.rate
                            }
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    
  )
}
