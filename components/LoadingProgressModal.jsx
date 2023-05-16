"use client"
import Image from "next/image"
const LoadingProgressModal = (props) => {
  const { title, open, setOpen, percent } = props;
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