import Image from "next/image"
import { SocialIcon } from "react-social-icons"

const Hero = () => {
    const socialUrls = [
        { id: 1, url: "https://www.instagram.com/gladyspnut/" },
        { id: 2, url: "https://www.facebook.com/gladyspnut/" },
        { id: 3, url: "https://dribbble.com/gladyspnut" }
    ]

    return (
        <div className="w-full min-h-fit relative">
            <Image src={"/images/heroimageB.jpg"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full h-44 object-cover " />
            <Image src={"/images/mijnlogo-white.png"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full object-contain absolute h-24 top-[10%]" />
            <h3 className="w-72 absolute top-[60%] left-[50%] translate-x-[-50%] backdrop-blur-sm p-1 rounded text-center text-lg text-white tracking-wider font-light"> Illustrator & Striptekenaar </h3>
            <span className="absolute top-[83%] left-[50%] translate-x-[-50%]">
                {socialUrls.map(s => (
                    <SocialIcon
                    style={{ height: 20, width: 20, marginRight: ".5em" }}
                    key={s.id}
                    bgColor="white"
                    fgColor="black"
                    url={s.url}
                    />
                    ))}
            </span>
        </div>
    )
}
export default Hero