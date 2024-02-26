import React from 'react'
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavouriteBook from "./FavouriteBook";
import PromoBanner from './PromoBanner';

const home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBook/>
      <PromoBanner/>
    </div>
  )
}

export default home
