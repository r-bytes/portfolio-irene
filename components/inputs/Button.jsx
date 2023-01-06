import { IconButton } from "@material-ui/core"
import Link from "next/link"

const Button = ({ text, href, primary, primaryFlex, notAllowed }) => {
    const buttons = notAllowed ? ( // differentiate clickable buttons from non-clickable buttons 
            <button
                className={primary ?
                    "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider" : primaryFlex ?
                    "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider place-self-end" :
                    "cursor-default px-4 py-[.55rem] border text-secondary uppercase font-extralight text-xs tracking-wider"
                }
            >
                {text}
            </button>
        ) : (
            <IconButton style={{ borderRadius: "0px", padding: "0px"}}>
                <Link
                    className={primary ?
                        "px-4 py-2.5 bg-button hover:bg-hover hover:shadow-lg text-primary uppercase font-semibold text-xs tracking-wider" : primaryFlex ?
                        "px-4 py-2.5 bg-button hover:bg-hover hover:shadow-lg text-primary uppercase font-semibold text-xs tracking-wider place-self-end" :
                        "px-4 py-2.5 bg-none hover:bg-hover text-secondary uppercase font-extralight text-xs tracking-wider cursor-none"
                    }
                    href={href ? href : ""}
                >
                    {text}
                </Link>
            </IconButton>
    )

    return (
        buttons
    )
}
export default Button