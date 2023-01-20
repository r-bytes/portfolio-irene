import { useStateContext } from "context/StateContext";

const HamburgerMenu = ({ closeIcon }) => {
    const { isOpen, setIsOpen } = useStateContext()
    const genericHamburgerLine = `z-50 w-10 h-1 h-[3px] my-1 rounded-full bg-white transition ease transform duration-300`;
    const genericCloseLine = `z-50 w-5 h-[1px] my-[2px] rounded-full bg-white transition ease transform duration-300`;
    
    return (
        closeIcon ?
            <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center group z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 z-50 "
                            : "opacity-50 group-hover:opacity-100 z-50 "
                    }`}
                />
                <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0 z-50 " : "opacity-50 group-hover:opacity-100 z-50 "}`} />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 z-50 "
                            : "opacity-50 group-hover:opacity-100 z-50 "
                    }`}
                />
            </button>
        : <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group z-50"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${genericCloseLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 z-50 "
                        : "opacity-50 group-hover:opacity-100 z-50 "
                }`}
            />
            <div className={`${genericCloseLine} ${isOpen ? "opacity-0 z-50 " : "opacity-50 group-hover:opacity-100 z-50 "}`} />
            <div
                className={`${genericCloseLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 z-50 "
                        : "opacity-50 group-hover:opacity-100 z-50 "
                }`}
            />
        </button>
    )
}

export default HamburgerMenu