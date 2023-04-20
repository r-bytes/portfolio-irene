import { IconButton } from "@material-ui/core"
import Image from "next/image"
import { useRouter } from "next/router"
import { IconContext } from "react-icons"
import { AiFillBehanceCircle } from "react-icons/ai"
import { SocialIcon } from "react-social-icons"

const Hero = () => {
    const navigateTo = useRouter().push
    const socialUrls = [
        // { id: 1, url: "https://www.facebook.com/ireneberbee.comic" },
        { id: 1, url: "https://www.facebook.com/ComicsandIllustration" },
        { id: 2, url: "https://www.linkedin.com/in/ireneberbee" },
        // { id: 3, url: "https://ireneberbee.myportfolio.com" },
        { id: 4, url: "https://www.instagram.com/ireneberbee/" }
    ]

    return (
        <div className="w-full min-h-fit relative">
            <Image
                src={"/images/heroimageB.jpg"}
                alt="heroimageB.jpg"
                width={1000}
                height={1000}
                className="w-full h-[22rem] lg:h-[26rem] object-cover"
                // onClick={() => navigateTo("/")}

            />
            <div>
                <Image
                    src={"/images/mijnlogo-white.png"}
                    alt="heroimageB.jpg"
                    width={1000}
                    height={1000}
                    className="
                        min-w-fit w-5/6 lg:w-2/3 max-w-4xl pt-3 lg:pt-5 object-contain rounded-t-md bg-black/40
                        absolute h-32 top-[18.7%] lg:top-[20%] left-[50%] translate-x-[-50%]
                    "
                />
                <h3 className="
                        min-w-fit w-5/6 lg:w-2/3 max-w-4xl pt-4 lg:pb-10 p-1 pb-5
                        text-center text-lg text-white tracking-wider font-light rounded-b-md bg-black/40
                        absolute top-[55%] lg:top-[50.7%] left-[50%] translate-x-[-50%]
                    "
                >
                    Illustrator & Striptekenaar
                </h3>
            </div>
            <span className="absolute top-[81%] lg:top-[79%] left-[50%] translate-x-[-50%] p-0">
                {socialUrls.map(s => (
                    <IconButton
                        key={s.id}
                        style={{ borderRadius: "0px", padding: "0px"}}
                    >
                        <SocialIcon
                            style={{ height: 40, width: 40, marginRight: ".5em" }}
                            key={s.id}
                            bgColor={"white"}
                            // fgColor={"black"}
                            url={s.url}
                        />

                    </IconButton>
                ))}
                
                <AiFillBehanceCircle
                stroke="black"
                    onClick={() => navigateTo("https://ireneberbee.myportfolio.com")}
                    color="white"
                    size={47}
                    className="cursor-pointer rounded-full absolute top-[-10%] left-[113%] translate-x-[-50%] lg:top-[-10%]"
                />
            </span>
        </div>
    )
}
export default Hero