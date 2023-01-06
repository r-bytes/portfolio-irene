import { Button } from "@components/index"
import Image from "next/image"

const FeaturedPost = ({ image, title, subtitle, description, tag, buttonText, buttonUrl }) => {
    return (
        <div className="w-full h-[28rem] flex">
            <div className="w-2/4">
                <Image
                    src={image}
                    alt={image}
                    className="h-full w-full object-cover object-left-bottom"
                    width={500}
                    height={500}
                />
            </div>
            <div className="bg-secondary w-3/4 flex items-center">
                <div className="flex flex-col items-start space-y-3 text-secondary text-left p-8">
                    <h1 className="text-5xl font-extralight"> {title} </h1>
                    <h3 className="font-thin pb-8"> {subtitle} </h3>
                    <p className="pb-8"> {description} </p>
                    <div className="flex gap-1 justify-center items-center">
                        <Button text={tag} notAllowed />
                        <Button text={buttonText} href={buttonUrl} primary />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedPost