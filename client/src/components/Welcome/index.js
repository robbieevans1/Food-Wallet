import React from 'react'
import Bootstrap from 'react-bootstrap'

const Welcome = () => {
  return (
    <section
    class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
  >
    <div class="container">
      <div class="d-sm-flex align-items-center-justify-content-between">
        <div>
          <h1>Welcome to <span class="text-success">FoodWallet!</span></h1>
          <p class="lead my-4">
            Learn when and how much you can eat with decision worthy
            analytics. With Fitbit, we provide real-time stats that making
            losing, gaining or maintaining your weight not complex. You must
            have a Fitbit device to view these stats.
          </p>
        </div>
        <img
          src="./img/undraw_hamburger_-8-ge6.svg"
          class="img-fluid w-50 d-none d-sm-block py-4"
          alt="people working out"
          srcset=""
        />
      </div>
    </div>
  </section>
  )
}

export default Welcome