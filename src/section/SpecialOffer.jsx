import { Offers } from "../assets/assets"
import { Feature_Card } from "../component/Card"
import { HeaderSection } from "../component/HeaderSection"

export const SpecialOffer = () => {
    return (
        <div className="container px-5">
            <HeaderSection
                text_head="Special Offers"
                sub_text="Don’t miss our limited-time burger deals"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {
                    Offers.map((item , index) => {
                        return (
                            <div key={index}>
                                <Feature_Card head={item.head} content={item.content} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}