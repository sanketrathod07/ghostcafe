import React from 'react'
import HomeCarousel from '../../component/Carousel/HomeCarousel'
import ScrollCard from '../../component/ScrollCard/ScrollCard'
import HighRated from '../../component/HighRatedCarousel/HighRated'
import BottomCart from '../../component/BottomCart/BottomCart'
import Footer from '../../component/Footer/footer'

const Home = () => {


  return (
    <div>
      <HomeCarousel />
      <HighRated />
      <ScrollCard />
      <BottomCart />
      <Footer />
    </div>
  )
}

export default Home
