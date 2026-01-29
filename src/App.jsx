import './App.css'
import { Hero } from './section/Hero'
import { NavBar } from './section/NavBar'
import { assets } from './assets/assets'
import { Feature } from './section/Feature'
import MenuSection from './section/MenuSection'
export const App = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 bg-black p-2'>
        <NavBar />
      </header>
      <main>
        <section className="section relative flex items-center">
          <img
            src={assets.hero_image}
            alt="Burger"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
          />

          <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
          <Hero />
        </section>
        <section className='section relative pt-30 pb-15'>
          <img
            src={assets.Average_image}
            alt="Burger"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
          />

          <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
          <Feature />
        </section>
        <section className='section relative pt-30 pb-15'>
          <img
            src={assets.Average_image}
            alt="Burger"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
          />

          <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
          <MenuSection />
        </section>
      </main>
    </>
  )
}