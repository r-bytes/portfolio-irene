import Image from "next/image"
import { SocialIcon } from "react-social-icons"

const Hero = () => {
    const socialUrls = [
        // { id: 1, url: "https://www.facebook.com/ireneberbee.comic" },
        { id: 1, url: "https://www.facebook.com/ComicsandIllustration" },
        { id: 3, url: "https://www.instagram.com/ireneberbee/" }
    ]

    return (
        <div className="w-full min-h-fit relative">
            <Image src={"/images/heroimageB.jpg"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full h-[16rem] lg:h-72 object-cover" />
            <div>
                <Image src={"/images/mijnlogo-white.png"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full object-contain absolute h-24 lg:h-32 top-[10%]" />
                <h3 className="w-72 absolute top-[60%] lg:top-[50%] left-[50%] translate-x-[-50%] p-1 rounded text-center text-lg text-white tracking-wider font-light"> Illustrator & Striptekenaar </h3>
            </div>
            <span className="absolute top-[80%] left-[50%] translate-x-[-50%]">
                {socialUrls.map(s => (
                    <SocialIcon
                        style={{ height: 25, width: 25, marginRight: ".5em" }}
                        key={s.id}
                        bgColor={s.id === 2 ? "orange" : "white"}
                        fgColor={s.id === 2 ? "white" : "black"}
                        url={s.url}
                    />
                ))}
            </span>
        </div>
    )
}
export default Hero