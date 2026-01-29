import { ContactItems } from "../assets/assets"
import { Feature_Card } from "../component/Card"
import { HeaderSection } from "../component/HeaderSection"

export const Contact = () => {
    return (
        <div className="container px-5">
            <HeaderSection text_head={'Get In Touch 📍'} sub_text={'Have questions or want to visit us? We’d love to hear from you!'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                {
                    ContactItems.map((item , index) => (
                        <div key={index}>
                            <Feature_Card head={item.head} content={item.route} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}