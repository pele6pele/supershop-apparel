import '../style/MainRight.css'
import React from 'react'

import Slide from 'react-reveal/Slide'

const MainRight = () => {
  return (
    <div className="mainright" id="main">
      <Slide left>
        <div className="card card1">
          <div className="card-details">
            <div>
              <a href="#" className="product-tittle">
                Jumpers
              </a>
              <p>All colors</p>
              <div className="product-price">$65</div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide right>
        <div className="card card2">
          <div className="card-details">
            <div>
              <a href="#" className="product-tittle">
                Jackets
              </a>
              <p>Denim Jacket</p>
              <div className="product-price">$99</div>
            </div>
          </div>
        </div>
      </Slide>
      <Slide left>
        <div className="card card3">
          <div className="card-details">
            <div>
              <a href="#" className="product-tittle">
                Sport shoes
              </a>
              <p>Running sneakers</p>
              <div className="product-price">$65</div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default MainRight
