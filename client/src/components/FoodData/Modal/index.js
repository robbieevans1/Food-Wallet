import React from 'react'
import '../fooddata-styles.css'


const Modal = ({setOpenModal}) => {
  return (
    <div className='app__modal'>
      <h3>Please enter food and total calories.</h3>
      <button className='btn__close__modal' onClick={() => setOpenModal(false)}>Close</button>
    </div>
  )
}

export default Modal