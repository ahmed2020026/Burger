import { Burgers ,assets} from '../assets/assets'
import { Menu_Card } from '../component/CardMenu'
import { HeaderSection } from '../component/HeaderSection'

const MenuPage = () => {
    return (
        <section id='menu' className='section relative pt-10 pb-10'>
            <img
                src={assets.Average_image}
                alt="Burger"
                className="absolute top-0 left-0 inset-0 h-full w-full object-cover"
            />

            <div className="absolute top-0 left-0 inset-0 bg-black/60"></div>
            <div className="container px-5 py-16">

                {/* Section Header */}

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {Burgers.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                        >
                            <Menu_Card
                                image={item.image}
                                head={item.name}
                                content={item.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuPage
