import { Burgers } from "../assets/assets"
import { Menu_Card } from "../component/CardMenu"
import { HeaderSection } from "../component/HeaderSection"

const MenuSection = () => {
    return (
        <div className="container px-5 py-16">

            {/* Section Header */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <HeaderSection
                    text_head={'Our Menu'}
                    sub_text={'Freshly prepared burgers and sides that will satisfy every craving.'}
                />
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {Burgers.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                    >
                        <Menu_Card
                            image={item.image}
                            head={item.name}
                            content={item.description}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MenuSection
