import { Hero } from '../section/Hero'
import { Feature } from '../section/Feature'
import { SpecialOffer } from '../section/SpecialOffer'
import MenuSection from '../section/MenuSection'
import { About } from '../section/About'
import { Reviews } from '../section/Reviews'
import { CTA } from '../section/CTA'
import { assets } from '../assets/assets'

export const HomePage = () => {
    return (
        <>
            <section id='home' className="section relative flex items-center">
                <img
                    src={assets.hero_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <Hero />
            </section>

            <section id='about' className='section relative pt-30 pb-15'>
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

            <section id='menu' className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <MenuSection />
            </section>

            <section id='whyUs' className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <Feature />
            </section>

            <section className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <SpecialOffer />
            </section>

            <section id='review' className='section relative pt-10 pb-10'>
                <img
                    src={assets.Average_image}
                    alt="Burger"
                    className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
                <Reviews />
            </section>
        </>
    )
}
