import React from 'react'
import '../fooddata-styles.css'

const ControlsCounter = ({total,totalOunces, totalProtein, totalFiber}) => {
  return (
    <div className='app__controls__counter text-green-900'>
      <h2>Total Calories: <span>{total}</span></h2>
      <h2>Total Ounces: <span>{totalOunces}</span></h2>
      <h2>Total Protein: <span>{totalProtein}</span></h2>
      <h2>Total Fiber: <span>{totalFiber}</span></h2>
      <br></br>
      <h2>C/O Ratio: <span>{total}</span></h2>
      <h2>C/P Ratio: <span>{total}</span></h2>
      <h2>C/F Ratio: <span>{total}</span></h2>
    </div>
  )
}

export default ControlsCounter