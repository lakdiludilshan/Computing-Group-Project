import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex item-center'>
      <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-2/3 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
            <p className='md:w-4/5'>nimantha uba mata kariya newe harida. denne ubata ata deka puka wate yanna kariya. yaka arapu eka uba. nisaluth kari ponnaya wita kariya wadak hariyata karanne na htta.
                 sonal ubath uba usa unata mata loku na hutto waren gaha ganna. jayaruge puka wikunala api keeyak hari hoya gamu. jayaru ubath mata kariya newe harid eka mathaka thiya ganin.
                eddi mata beheth aran waren depression wage htto. me jiwithe katukai athi wela inne. mn mahana wenawa bn.
            </p>
            <div>
                <input type="search" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='py-2 px-6 bg-blue-700 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
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
