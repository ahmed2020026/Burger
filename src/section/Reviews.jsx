import { HeaderSection } from "../component/HeaderSection"

export const Reviews = () => {
    return (
        <div className="container px-5 py-16">

            {/* Section Header */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <HeaderSection
                    text_head={'What Our Customers Say'}
                    sub_text={'Hear from the people who love our burgers as much as we do!'}
                />
            </div>

            {/* Reviews Grid */}
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Testimonial 1 */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    className="bg-transparent text-center flex flex-col justify-between backdrop-blur-md p-6 rounded-2xl shadow shadow-orange-500/60 border border-orange-500/30 transition hover:scale-[1.03]"
                >
                    <p className="text-gray-400 mb-4">
                        "Absolutely the best burger I've ever had! The flavors are amazing and the patty is perfectly cooked."
                    </p>
                    <div className="flex justify-center space-x-1 text-orange-500">
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="bg-transparent text-center flex flex-col justify-between backdrop-blur-md p-6 rounded-2xl shadow shadow-orange-500/60 border border-orange-500/30 transition hover:scale-[1.03]"
                >
                    <p className="text-gray-400 mb-4">
                        "Fast delivery and the burger arrived hot and fresh. Will definitely order again!"
                    </p>
                    <div className="flex justify-center space-x-1 text-orange-500">
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="450"
                    className="bg-transparent text-center flex flex-col justify-between backdrop-blur-md p-6 rounded-2xl shadow shadow-orange-500/60 border border-orange-500/30 transition hover:scale-[1.03]"
                >
                    <p className="text-gray-400 mb-4">
                        "Loved the combo deals! Fries were crispy and the burger was juicy. Highly recommended."
                    </p>
                    <div className="flex justify-center space-x-1 text-orange-500">
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
