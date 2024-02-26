import React from 'react'
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavouriteBook from "./FavouriteBook";
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';

const home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBook/>
      <PromoBanner/>
      <OtherBooks/>
    </div>
  )
}

export default home
