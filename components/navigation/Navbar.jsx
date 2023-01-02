import Link from "next/link"
import { IconButton } from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [hamburgerOn, setHamburgerOn] = useState(false)
    const pageList = [
        {id: 1, name: "home", url: "/"},
        {id: 2, name: "portfolio", url: "/portfolio"},
        {id: 3, name: "eigen werk", url: "/eigen-werk"},
        {id: 4, name: "over mij", url: "/over-mij"},
        {id: 5, name: "contact", url: "/contact"}
    ]

    return (
        <>
            {/* regular menu */}
            <nav className={hamburgerOn ?
                "bg-secondary text-secondary h-screen w-screen z-40 flex flex-col-reverse justify-between items-center" :
                "bg-secondary text-secondary h-10 flex justify-center items-center"
            }>
                <ul className={hamburgerOn ?
                    "w-full h-full z-50 flex flex-col items-center justify-center space-y-10 font-bold tracking-widest" :
                    "border w-full h-full hidden lg:flex justify-center lg:items-center lg:space-x-5 xl:space-x-10 font-thin tracking-wide"
                }>
                    {pageList.map(page => (
                        <li key={page.id}>
                            <IconButton className="rounded-lg" color="inherit">
                                <Link
                                    className={hamburgerOn ?
                                        "text-tertiary hover:text-secondary text-4xl tracking-widest" :
                                        "text-secondary text-xs"
                                    }
                                    href={page.url}> {page.name} </Link>
                            </IconButton>
                        </li>
                    ))}
                </ul>
                {hamburgerOn ?
                    // show close icon
                    <div className="w-full flex justify-between p-4">
                        <Image src={"/images/icoIrene.png"} alt="logo_icoIrene" width={25} height={25} />
                        <AiOutlineClose
                            className="cursor-pointer text-3xl text-tertiary hover:text-secondary"
                            onClick={() => setHamburgerOn(!hamburgerOn)}
                        />
                    </div> :
                    // show hamburger icon
                    <div className="w-full flex lg:hidden justify-end p-4">
                        <GiHamburgerMenu
                            className="cursor-pointer text-tertiary hover:text-secondary"
                            onClick={() => setHamburgerOn(!hamburgerOn)}
                        />
                    </div>
                }
            </nav>
        </>
    )
}
export default Navbar