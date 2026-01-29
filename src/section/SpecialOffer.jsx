import { Offers } from "../assets/assets"
import { Feature_Card } from "../component/Card"
import { HeaderSection } from "../component/HeaderSection"

export const SpecialOffer = () => {
    return (
        <div className="container px-5 py-16">

            {/* Section Header */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <HeaderSection
                    text_head="Special Offers"
                    sub_text="Don’t miss our limited-time burger deals"
                />
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {Offers.map((item, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 150}
                        data-aos-duration="700"
                    >
                        <Feature_Card
                            head={item.head}
                            content={item.content}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
