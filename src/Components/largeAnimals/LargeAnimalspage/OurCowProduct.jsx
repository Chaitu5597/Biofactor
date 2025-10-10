import React from 'react'
import Product from '../../Product'
import { pictures } from '../../../assets/images/pictires'

const OurCowProduct = () => {
  return (
    <>
      <Product
        product={{
          name: "BIOFACTOR",
          description: "Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.Boosting Growth, Enhancing Productivity.",
          type: "Cow Feed",
          image: pictures.cowGallantproduct,
        }}
      />

    </>
  )
}

export default OurCowProduct