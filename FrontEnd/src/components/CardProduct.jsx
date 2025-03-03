import React from 'react'
import { Link } from 'react-router-dom'


function CardProduct({ productPrice, img }) {
  return (
    <><div className="container mt-36">
      <div className="card custom-card">
        <img src={`http://localhost:4400/image/product/`+ img} alt="" className="card-img-top custom-card-image" />
        <div className="card-body">
          <p className="card-text custom-card-detail d-flex"><img width="30" height="30" src="https://img.icons8.com/fluency/48/000000/utah.png" alt="utah" />  :  {productPrice} m<sub>2</sub></p>
          <Link className='btn btn-info custom-link' to="/details">Details</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardProduct
