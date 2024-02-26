import React from 'react'
import Banner from "../components/Banner";
import BestSellerBooks from "./BestSellerBooks";
import FavouriteBook from "./FavouriteBook";
import BookCards from '../components/BookCards';

const home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavouriteBook/>
    </div>
  )
}

export default home
