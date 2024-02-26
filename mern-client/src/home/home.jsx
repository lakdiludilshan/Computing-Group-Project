import React from 'react'
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavouriteBook from "./FavouriteBook";
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';
import Footer from '../components/Footer'

const home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default home
