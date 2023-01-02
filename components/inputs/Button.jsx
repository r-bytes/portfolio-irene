const Button = ({ text, href, primary }) => {
    return (
        <button className={primary ? "px-4 py-2 bg-button text-primary uppercase font-semibold text-xs tracking-wider" : "cursor-none px-4 py-2 border text-secondary uppercase font-extralight text-xs tracking-wider"} href={href}>
            {text}
        </button>
    )
}
export default Button