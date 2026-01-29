import { Features } from '../assets/assets'
import { Feature_Card } from '../component/Card'
import { HeaderSection } from '../component/HeaderSection'

export const Feature = () => {
    return (
        <div className='container px-5'>
            <HeaderSection text_head={'Why Our Burgers Are Special'} sub_text={'From fresh ingredients to perfect grilling — here’s why customers love us.'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {
                    Features.map((feature, index) => {
                        return (
                            <div key={index}>
                                <Feature_Card image={feature.icon} head={feature.head} content={feature.content} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}