import Link from "next/link"
import { IconButton } from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath !== "/") {
            setActivePage(router.asPath.replace("/", "").replace("-", " "))
        } else {
            setActivePage("home")
        }
    }, [router.asPath]);
    
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const [activePage, setActivePage] = useState("home")
    const pageList = [
        {_id: 1, title: "home", url: "/"},
        {_id: 2, title: "portfolio", url: "/portfolio"},
        {_id: 3, title: "eigen werk", url: "/eigen-werk"},
        {_id: 4, title: "over mij", url: "/over-mij"},
        {_id: 5, title: "contact", url: "/contact"}
    ]
    const handleClick = (page) => {
        setActivePage(page)
        setHamburgerMenu(false)
    }

    return (
        <>
            {/* regular menu */}
            <nav className={hamburgerMenu ?
                "bg-secondary text-secondary h-screen w-screen z-40 flex flex-col-reverse justify-between items-center" :
                "bg-secondary text-secondary h-10 flex justify-center items-center"
            }>
                <ul className={hamburgerMenu ?
                    "w-full h-full z-50 flex flex-col items-center justify-center space-y-10 font-bold tracking-widest" :
                    "w-full h-full hidden lg:flex justify-center lg:items-center lg:space-x-5 xl:space-x-10 font-thin tracking-wide"
                }>
                    {pageList.map(({ page: _id, url, title }) => (
                        <li key={_id}>
                            <IconButton
                                style={{ borderRadius: "0px", padding: "0px"}}
                                color="inherit"
                                onClick={() => handleClick(title)}
                            >
                                <Link
                                    className={hamburgerMenu ?
                                        "text-tertiary hover:text-secondary text-4xl tracking-widest" : title === activePage ?
                                        "text-secondary text-[16px] underline underline-offset-8" :
                                        "text-secondary text-[16px]"
                                    }
                                    href={url}
                                >
                                    {title}
                                </Link>
                            </IconButton>
                        </li>
                    ))}
                </ul>
                {hamburgerMenu ?
                    // show close icon
                    <div className="w-full flex items-start justify-between p-6">
                        <Image src={"/images/mijnlogo-white.png"} alt="logo_icoIrene" width={100} height={100} />
                        <AiOutlineClose
                            className="cursor-pointer text-3xl text-tertiary hover:text-secondary"
                            onClick={() => setHamburgerMenu(false)}
                        />
                    </div> :
                    // show hamburger icon
                    <div className="w-full flex lg:hidden justify-end p-4">
                        <GiHamburgerMenu
                            className="cursor-pointer text-tertiary hover:text-secondary"
                            onClick={() => setHamburgerMenu(true)}
                        />
                    </div>
                }
            </nav>
        </>
    )
}
export default Navbar