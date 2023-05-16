"use client"

import Image from "next/image"

// import { useEffect } from 'react'

const LoadingProgressModal = (props) => {
  const { title, open, setOpen, percent } = props
  // useEffect(() => {
  //   const rootElement = document.getElementById('root');

  //   // Function to disable scrolling
  //   const disableScroll = () => {
  //     rootElement.classList.add('modal-open');
  //   };

  //   // Function to enable scrolling
  //   const enableScroll = () => {
  //     rootElement.classList.remove('modal-open');
  //   };

  //   if (open) {
  //     disableScroll();
  //   } else {
  //     enableScroll();
  //   }

  //   // Cleanup function to enable scrolling when the component unmounts
  //   return () => {
  //     enableScroll();
  //   };
  // }, [open]);
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div>
          <div className='progressTitle'>
            <h1>{title}</h1>
          </div>
          <div className='progress'>
            <div className='track'>
              <div style={{ width: percent }} className="percent"></div>
              <span style={{ left: percent }} className="percentTag">{percent}</span>
            </div>
          </div>
        </div>`
        <button className="crossBtn" onClick={() => setOpen(false)}>
          <Image src='/img/cross.png' width={37.5} height={37.5} alt='cross' />
        </button>`
      </div>
    </div>
  )
}

export default LoadingProgressModal