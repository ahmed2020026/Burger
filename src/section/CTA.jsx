import { assets } from "../assets/assets"
import { BtnClick } from "../component/BtnClick"

export const CTA = () => {
    return (
        <div className="container px-5 py-5">
            <div className="flex gap-5 backdrop-blur-md p-3 py-10 rounded-lg border border-orange-500/50">
                <div className=" shrink-0">
                    <img src={assets.Light} alt="discover" className="w-28 p-2" />
                </div>
                <div>
                    <p className="text-gray-400 max-w-xl mb-8">
                        Taste the best burgers in town. Fresh ingredients, juicy patties, and flavors you'll never forget!
                    </p>
                    <BtnClick Text={'Explore'} />
                </div>
            </div>
        </div>
    )
}