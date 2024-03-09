import { Button } from "@components/index";
import Image from "next/image";

const NotFeaturedPost = ({ image, title, subtitle, description, buttonText, buttonUrl, bgColor, txtColor }) => {
    return (
        <div className="w-full md:h-[28rem] flex flex-col md:flex-row mb-12">
            <div
                style={bgColor && { backgroundColor: bgColor }}
                className={bgColor ? `bg-[${bgColor}] w-full md:w-1/2 flex items-center` : `bg-secondary w-full md:w-1/2 flex items-center`}
            >
                <div
                    className={
                        txtColor
                            ? `text-[${txtColor}] flex flex-col items-start space-y-3 text-left p-8`
                            : "flex flex-col items-start space-y-3 text-secondary text-left p-8"
                    }
                >
                    <h1 className="text-5xl font-extralight"> {title} </h1>
                    <h3 className="font-thin pb-8"> {subtitle} </h3>
                    <p className="pb-8"> {description} </p>
                    <div className="flex gap-1 justify-center items-center">
                        {
                            // show button only when button text exists
                            buttonText?.length ? <Button ext text={buttonText} href={buttonUrl} primary /> : ""
                        }
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <Image src={image} alt={image} className="h-96 md:h-full w-full object-contain" width={500} height={500} />
            </div>
        </div>
    );
};
export default NotFeaturedPost;
