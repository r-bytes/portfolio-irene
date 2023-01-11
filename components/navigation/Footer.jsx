import Image from "next/image"
import { SocialIcon } from "react-social-icons"
import { MdOutlineEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"


const Footer = () => {
    const socialUrls = [
        // { id: 1, url: "https://www.facebook.com/ireneberbee.comic" },
        { id: 1, url: "https://www.facebook.com/ComicsandIllustration" },
        { id: 3, url: "https://www.instagram.com/ireneberbee/" }
    ]

    return (
        <div className="p-10 z-50 w-full bg-secondary flex flex-col md:flex-row">
            <div className="md:w-1/3 p-10 mx-auto">
                <Image
                    src={"/images/mijnlogo-white.png"}
                    alt="heroimageB.jpg"
                    width={125}
                    height={125}
                />
            </div>
            <div className="md:w-2/3 p-10 tracking-wider text-center md:text-left">
                <h3 className="text-lg text-accent mb-4"> Beschikbaar voor editorial werk blabla lorum ipsum tra. Wat doe ik eigenlijk?  </h3>
                <div className="flex flex-col text-accent"> {/* Icon Container*/}
                    <span className="block">
                        <MdOutlineEmail className="inline-block mr-2" />
                        <h4 className="text-white text-xs inline-block"> info@ireneberbee.nl </h4>
                    </span>
                    <span className="block">
                        <BsFillTelephoneFill className="inline-block mr-2" />
                        <h4 className="text-white text-xs inline-block"> +31 6 123 456 78 </h4>
                    </span>
                </div>
            </div>
            <div className="md:w-1/3 flex justify-center p-10">
                {socialUrls.map(s => (
                    <SocialIcon
                        style={{ height: 25, width: 25, marginRight: ".5em" }}
                        key={s.id}
                        bgColor={s.id === 2 ? "orange" : "white"}
                        fgColor={s.id === 2 ? "white" : "black"}
                        url={s.url}
                    />
                ))}
            </div>
        </div>
    )
}
export default Footer