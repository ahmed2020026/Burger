import './App.css'
import { Hero } from './section/Hero'
import { NavBar } from './section/NavBar'
import { assets } from './assets/assets'
import { Feature } from './section/Feature'
import { SpecialOffer } from './section/SpecialOffer'
import MenuSection from './section/MenuSection'
import { About } from './section/About'
import { Reviews } from './section/Reviews'
import { CTA } from './section/CTA'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
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
          <About />
        </section>

        <section className='relative pt-10 pb-10'>
          <img
            src={assets.Average_image}
            alt="Burger"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
          <CTA />
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
          <SpecialOffer />
        </section>

        <section className='section relative pt-30 pb-15'>
          <img
            src={assets.Average_image}
            alt="Burger"
            className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
          <Reviews />
        </section>

      </main>
      <footer className="bg-black text-gray-200 py-12 pb-6">
        <div className="container px-5 gap-8">

          {/* Logo & Description */}
          <div className="space-y-4 text-center">
            <img src={assets.logo_image} alt="logo" className='w-20 h-20 block mx-auto' />
            <h2 className="text-2xl font-bold text-orange-500">Burger Heaven</h2>
            <p className="text-gray-400">
              Serving the juiciest, most delicious burgers in town with fresh ingredients and love in every bite.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-orange-700/50 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 Burger Heaven. All rights reserved.
        </div>
      </footer>
    </>
  )
}