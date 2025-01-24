

import MainDiv from "../components/MainDiv"
import Services from "../components/Services"
import About from "../components/About"
import Blogs from "../components/Blogs"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Component from "../components/Component"
import ContectUs from "../components/ContectUs"

function HomePage() {
  return (
    <main className="m-0 p-0 h-screen ">
      <MainDiv />
      <Services />
      <About />
      <Blogs />
      <Carousel/>
      <Component/>
      <ContectUs/>
      <Footer />
    </main>
  )
}

export default HomePage