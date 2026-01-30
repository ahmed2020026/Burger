import { Burgers, assets } from '../assets/assets'
import { Burgers_en } from "../assets/assets_en";
import { Menu_Card } from '../component/CardMenu'
import { useNavigate } from "react-router-dom"
import { getLanguage } from '../hooks/Context'

const MenuPage = () => {
    const { lang } = getLanguage();
    const burgersList = lang === 'fi' ? Burgers : Burgers_en;
    const nav = useNavigate()
    const GoTo = (e) => {
        window.scrollTo('0', '0')
        nav(`/${e}`);
    }
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
                    {burgersList.map((item, index) => (
                        <div>
                            <Menu_Card
                                onClick={() => GoTo(`/burger/${item.id}`)}
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
