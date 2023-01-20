import { useEffect } from "react"
import Link from "next/link"
import { IconButton } from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useStateContext } from "context/StateContext";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const { isOpen, setIsOpen, activePage, setActivePage } = useStateContext()
    const router = useRouter();
    
    const pageList = [
        {_id: 1, title: "home", url: "/"},
        {_id: 2, title: "portfolio", url: "/portfolio"},
        {_id: 3, title: "eigen werk", url: "/eigen-werk"},
        {_id: 4, title: "over mij", url: "/over-mij"},
        {_id: 5, title: "contact", url: "/contact"}
    ]

    const handleNavigation = (page) => {
        setActivePage(page)
        setIsOpen(false)
    }

    useEffect(() => {
        if (router.asPath !== "/") {
            setActivePage(router.asPath.replace("/", "").replace("-", " "))
        } else {
            setActivePage("home")
        }
    }, [router.asPath]);

    return (
        <>
            {/* regular menu */}
            <nav className={isOpen ?
                "fixed bg-secondary text-secondary h-screen w-screen flex flex-col-reverse justify-between items-center duration-300 ease-in-out z-50" :
                "bg-secondary text-secondary h-10 flex justify-center items-center"
            }>
                <ul className={isOpen ?
                    "w-full h-full flex flex-col items-center justify-center space-y-10 font-bold tracking-widest" :
                    "w-full h-full hidden lg:flex justify-center lg:items-center lg:space-x-5 xl:space-x-10 font-thin tracking-wide"
                }>
                    {pageList.map(({ page: _id, url, title }, index) => (
                        <li key={index}>
                            <IconButton
                                style={{ borderRadius: "0px", padding: "0px"}}
                                color="inherit"
                                onClick={() => handleNavigation(title)}
                            >
                                <Link
                                    className={isOpen ? "text-tertiary hover:text-secondary text-4xl tracking-widest"
                                        : title === activePage ? "text-secondary text-[16px] underline underline-offset-8"
                                        : "text-secondary text-[16px]"
                                    }
                                    href={url}
                                >
                                    {title}
                                </Link>
                            </IconButton>
                        </li>
                    ))}
                </ul>
                {isOpen ?
                    // show close icon
                    <div className="w-full flex items-start justify-between">
                        <Image  /* logo */
                            src={"/images/mijnlogo-white.png"}
                            alt="logo_icoIrene"
                            width={100}
                            height={100}
                            className="p-3"
                        />
                        <AiOutlineClose
                            className="text-2xl m-3 cursor-pointer text-tertiary hover:text-secondary"
                            onClick={() => setIsOpen(false)}
                        />
                    </div> :
                    // show hamburger icon
                    <div className="w-full flex lg:hidden justify-end p-4">
                        <GiHamburgerMenu
                            className="text-2xl cursor-pointer text-tertiary hover:text-secondary"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                }
            </nav>
        </>
    )
}
export default Navbar