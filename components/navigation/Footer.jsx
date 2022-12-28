import Image from "next/image"
import { SocialIcon } from "react-social-icons"
import { MdOutlineEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"


const Footer = () => {
    const socialUrls = [
        { id: 1, url: "https://www.instagram.com/gladyspnut/" },
        { id: 2, url: "https://www.facebook.com/gladyspnut/" },
        { id: 3, url: "https://dribbble.com/gladyspnut" }
    ]
    return (
        <div className="w-full min-h-56 bg-secondary mt-32 flex justify-between pt-12 relative">
            <div className="w-1/3">
                <Image src={"/images/mijnlogo-white.png"} alt="heroimageB.jpg" width={500} height={500} className=" items-start w-full object-contain h-20 absolute left-[-35%]" />
            </div>
            <div className="w-1/3 px-4 tracking-wider pb-12">
                <h3 className="text-lg text-accent mb-4"> Beschikbaar voor editorial werk blabla lorum ipsum tra. Wat doe ik eigenlijk?  </h3>
                <div className="flex-col text-accent">
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
            <div className="w-1/3 flex space-x-4 justify-center">
                {socialUrls.map(s => (
                    <SocialIcon
                        style={{ height: 25, width: 25, marginRight: ".5em" }}
                        key={s.id}
                        bgColor="white"
                        fgColor="black"
                        url={s.url}
                    />
                ))}
            </div>
        </div>
    )
}
export default Footer