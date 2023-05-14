"use client"
import React from 'react'
import d from '../../styles/pages/demo.module.css'
import MainLayout from '@/components/layouts/MainLayout'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const MakeDemo = () => {
  const options = {
    perPage: 3,
    gap: '16px',
    type: 'loop',
    perMove: 1,
    drag: true,
    pauseOnFocus: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    classes: {
      prev: '',
      next: '',
    },
    pagination: false,
    autoplaySpeed: 3000,
    interval: 3000,
    width: '100%',
    height: '100%',
    breakpoints: {
      1150: {
        perPage: 2,
      },
    },
  }
  return (
    <MainLayout>
      <div className={d.demo}>
        <div className="pageTitle">
          <h1>Make a demo</h1>
          <p>Choose Your Favorite Artist Voice to make your song</p>
        </div>
        <div className={d.progress}>
          <div className={`${d.target} ${d.active}`}>
            <span>01</span>
            <div className={d.circle}></div>
          </div>
          <div className={`${d.target}`}>
            <span>02</span>
            <div className={d.circle}></div>
          </div>
          <div className={`${d.target}`}>
            <span>03</span>
            <div className={d.circle}></div>
          </div>
          <div className={d.line}>
            <div className={d.line1}></div>
            <div className={d.line1}></div>
          </div>
        </div>
        <div className={d.upload}>
          <h4>Upload Your Recording</h4>
          <button>
            <Image src="/img/plus.png" width={50} height={50} alt='plus' />
          </button>
        </div>
        <div className={d.latestDemo}>
          <h4>Latest Demo</h4>
          <div className={d.latestDemo__content}>
            <Splide options={options}>
              {
                ['1', '2', '3', '4'].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className={d.demoCard}></div>
                    </SplideSlide>
                  )
                })
              }
            </Splide>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MakeDemo