import { Button } from "@components/index"
import Image from "next/image"

const Strip = ({ img, title, subTitle, text, label }) => {
    return (
        <div className="w-full h-96 flex">
            <div className="w-1/2">
                <Image src={img} className="w-full h-96 object-cover object-bottom" width={1000} height={1000} alt="#" />
            </div>
            <div className="bg-secondary w-1/2">
                <div className="flex-row space-y-3 text-secondary text-left p-8">
                    <h1 className="text-5xl font-extralight"> {title} </h1>
                    <h3 className="font-thin pb-8"> {subTitle} </h3>
                    <p className="pb-8"> {text} </p>
                    <div className="flex gap-1">
                        <Button text={label} />
                        <Button text={"Meer Info"} href={"https://duckduckgo.com"} primary />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Strip