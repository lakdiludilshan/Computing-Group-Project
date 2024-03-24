import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex item-center'>
      <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-2/3 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
            <p className='md:w-4/5'>
            In our bookstore app, you have the unique opportunity to both buy and sell your beloved books, ensuring that you get the best value for your literary treasures. Whether you're looking to enrich your collection with new reads or part ways with books you've enjoyed, our platform offers competitive prices to cater to your needs. With a seamless interface designed for ease of use, you can navigate through a diverse selection of titles and genres, making informed choices with confidence. By facilitating the exchange of books at favorable prices, we aim to create a dynamic community where book lovers can connect, share, and explore the world of literature. Join us in this exciting journey of buying and selling books, where every transaction contributes to fostering a vibrant reading culture.
            </p>
        </div>

        {/* right side */}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
