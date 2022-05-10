import React from 'react'
import Modal from '../components/FoodData/Modal'

const FoodData = () => {
  return (
    <div>
      			{openModal ? <AppModal setOpenModal={setOpenModal} /> : ""}

    </div>
  )
}

export default FoodData