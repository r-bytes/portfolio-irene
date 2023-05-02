import Image from "next/image"
import { SocialIcon } from "react-social-icons"
import { MdOutlineEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IconButton } from "@material-ui/core"
import { AiFillBehanceCircle } from "react-icons/ai"
import { IoIosBusiness } from "react-icons/io"
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router"
import { Link } from "next"

const Footer = () => {
    const { activePage } = useStateContext()
    const navigateTo = useRouter().push
    let footerStyle = ""

    if (activePage === "success") {
        footerStyle = "p-10 z-50 w-full bg-secondary flex flex-col md:flex-row justify-center items-center md:items-start md:gap-10 fixed bottom-0 left-0"
    } else {
        footerStyle = "p-10 z-50 w-full bg-secondary flex flex-col md:flex-row justify-center items-center md:items-start md:gap-10"
    }

    const socialUrls = [
        { id: 1, url: process.env.NEXT_PUBLIC_FACEBOOK },
        { id: 2, url: process.env.NEXT_PUBLIC_LINKEDIN },
        { id: 3, url: process.env.NEXT_PUBLIC_INSTAGRAM }
    ]

    return (
        <div className={footerStyle}>
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
                        <h4 className="text-white text-xs inline-block"> {process.env.NEXT_PUBLIC_EMAIL} </h4>
                    </span>
                    <span className="block">
                        <BsFillTelephoneFill className="inline-block mr-2" />
                        <h4 className="text-white text-xs inline-block"> {process.env.NEXT_PUBLIC_TELEPHONE} </h4>
                    </span>
                    <span className="flex mt-2 text-xs">
                        <IoIosBusiness className="text-lg inline-block mr-2"/>
                        <h4 className="text-white">KVK: {process.env.NEXT_PUBLIC_KVK}</h4>
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
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </IconButton>
                                      
                ))}
                <a target="_blank" href="https://ireneberbee.myportfolio.com" rel="noopener noreferrer">
                    <AiFillBehanceCircle target="_blank" color="white" size={48} className="cursor-pointer" />
                </a>
            </div>
        </div>
    )
}
export default Footer