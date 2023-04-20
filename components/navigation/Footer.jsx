import Image from "next/image"
import { SocialIcon } from "react-social-icons"
import { MdOutlineEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IconButton } from "@material-ui/core"
import { AiFillBehanceCircle } from "react-icons/ai"
import { IoIosBusiness } from "react-icons/io"


const Footer = () => {
    const socialUrls = [
        // { id: 1, url: "https://www.facebook.com/ireneberbee.comic" },
        { id: 1, url: "https://www.facebook.com/ComicsandIllustration" },
        { id: 2, url: "https://www.linkedin.com/in/ireneberbee" },
        // { id: 4, url: "https://ireneberbee.myportfolio.com"},
        { id: 5, url: "https://www.instagram.com/ireneberbee/" }
    ]

    return (
        <div className="p-10 z-50 w-full bg-secondary flex flex-col md:flex-row justify-center items-center md:items-start md:gap-10">
            <div className="md:w-1/3 my-10">
                <Image
                    className="w-44 mx-auto"
                    src={"/images/mijnlogo-white.png"}
                    alt="heroimageB.jpg"
                    width={150}
                    height={150}
                />
            </div>
            <div className="md:w-2/3 mt-10 tracking-wider text-center md:text-left">
                <h3 className="text-lg text-accent mb-4"> Beschikbaar voor: bedrijfs illustraties, editorial illustraties, strips, Character design en Artwork in opdracht.  </h3>
                <div className="flex flex-col text-accent"> {/* Icon Container*/}
                    <span className="block">
                        <MdOutlineEmail className="inline-block mr-2" />
                        <h4 className="text-white text-xs inline-block"> info@ireneberbee.nl </h4>
                    </span>
                    <span className="block">
                        <BsFillTelephoneFill className="inline-block mr-2" />
                        <h4 className="text-white text-xs inline-block"> +31 6 170 094 94 </h4>
                    </span>
                    <span className="flex mt-2 text-xs">
                        <IoIosBusiness className="text-lg inline-block mr-2"/>
                        <h4 className="text-white">KVK: 27362577</h4>
                    </span>
                    <span className="text-white text-xs text-center mt-8">
                        Art by Irene Berbee
                    </span>
                </div>
            </div>
            <div className="md:w-1/3 flex justify-center mt-10">
                {socialUrls.map(s => (
                    <IconButton key={s.id} style={{ borderRadius: "0px", padding: "0px"}}>
                        <SocialIcon
                            style={{ height: 40, width: 40, marginRight: "1em" }}
                            bgColor={"white"}
                            // fgColor={"black"}
                            url={s.url}
                        />
                    </IconButton>
                                      
                ))}
                <AiFillBehanceCircle onClick={() => navigateTo("https://ireneberbee.myportfolio.com")} color="white" size={48} className="cursor-pointer"/>

            </div>
        </div>
    )
}
export default Footer