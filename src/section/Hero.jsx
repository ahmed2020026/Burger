import { BtnClick } from "../component/BtnClick"
import { ScrollTo } from "../hooks/useScroll"


export const Hero = () => {
    return (
        <div className="relative container z-10 flex h-full items-center">
            <div className="container mx-auto">
                <div className="max-w-xl px-5">

                    <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mb-4 text-center md:text-left text-4xl font-extrabold leading-tight md:text-5xl text-orange"
                    >
                        Juicy Burgers <br />
                        Made Fresh Daily
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="mb-8 text-lg text-gray-400 text-center md:text-left md:text-xl"
                    >
                        From the first bite to the last, every burger is crafted
                        to deliver quality, freshness, and unforgettable taste.
                    </p>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex gap-4 items-center justify-center md:justify-start"
                    >
                        <BtnClick Text="View Menu" size="large" onClick={() => ScrollTo("menu")} />
                        <BtnClick Text="Review" size="large" variant="outlined" onClick={() => ScrollTo("review")} />
                    </div>

                </div>
            </div>
        </div>
    )
}
