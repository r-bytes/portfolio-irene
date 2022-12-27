import Image from "next/image"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
    return (
        <div className="w-full h-56 bg-secondary mt-32 flex justify-between pt-8 relative">
            <div className="w-1/3">
                <Image src={"/images/mijnlogo-white.png"} alt="heroimageB.jpg" width={500} height={500} className=" items-start w-full object-contain h-20 absolute left-[-40%]" />
            </div>
            <div className="w-1/3">
                <h3> Beschikbaar voor editing werk Esse duis ea cillum non consectetur. Mollit cillum officia commodo consectetur irure  </h3>
            </div>
            <div className="w-1/3">
                <SocialIcon
                    bgColor="white"
                    fgColor="black"
                    url="https://www.instagram.com/gladyspnut/"
                />
                <SocialIcon
                    bgColor="white"
                    fgColor="black"
                    url="https://www.facebook.com/gladyspnut/"
                />
              <SocialIcon
                bgColor="white"
                    fgColor="black"
                    url="https://dribbble.com/gladyspnut"
                />
            </div>
        </div>
    )
}
export default Footer