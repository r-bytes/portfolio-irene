import { IconButton } from "@material-ui/core"
import Link from "next/link"

const Button = ({ text, href, primary, primaryFlex, notAllowed, ext }) => {
    const buttons = notAllowed ? ( // differentiate clickable buttons from non-clickable buttons
        <button
            className={
                primary
                    ? "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider"
                    : primaryFlex
                    ? "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider place-self-end"
                    : "cursor-default px-4 py-[.55rem] border text-secondary uppercase font-extralight text-xs tracking-wider"
            }
        >
            {text}
        </button>
    ) : (
        <IconButton style={{ borderRadius: "0px", padding: "0px" }}>
            <Link
                target={ext && "_blank"}
                rel={ext && "noopener noreferrer"}
                className={
                    primary
                        ? "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider transform transition-transform hover:scale-105 duration-500"
                        : primaryFlex
                        ? "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider place-self-end transform transition-transform hover:scale-105 duration-500"
                        : "px-4 py-2.5 bg-none text-secondary uppercase font-extralight text-xs tracking-wider cursor-none transform transition-transform hover:scale-105 duration-500"
                }
                href={href ? href : ""}
            >
                {text}
            </Link>
        </IconButton>
    );

    return (
        buttons
    )
}
export default Button