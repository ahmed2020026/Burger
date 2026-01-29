import { HeaderSection } from "../component/HeaderSection"

export const About = () => {
    return (
        <div className="container px-5">
            <HeaderSection text_head={'About US'} sub_text={''} />
            <div className="">
                <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-400 leading-relaxed text-lg md:text-xl">
                    <p>
                        At <span className="font-bold text-orange-500">Burger Heaven</span>, we believe that a great burger is more than just a meal – it's an <span className="italic text-orange-400">experience</span>.
                    </p>
                    <p>
                        From sourcing the freshest ingredients to grilling each patty to perfection, every bite tells a story of <span className="font-semibold text-orange-500">passion and dedication</span>.
                    </p>
                    <p>
                        Our mission is to bring <span className="font-bold text-orange-500">joy, flavor, and unforgettable moments</span> to every customer who walks through our doors.
                    </p>
                    <p className="text-gray-400 font-semibold mt-4">
                        Taste the love we put into every burger, because here, every burger is made with heart ❤️
                    </p>
                </div>
            </div>
        </div>
    )
}