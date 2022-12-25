import Image from "next/image"

const Hero = () => {
    return (
        <div>
            <Image src={"/images/heroimageB.jpg"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full h-44 object-cover relative" />
            <Image src={"/images/mijnlogo-white.png"} alt="heroimageB.jpg" width={1000} height={1000} className="w-full object-contain absolute h-24 top-10" />
            <h3 className="absolute top-[15%] left-[40%] text-center text-lg text-white tracking-wider font-light"> Illustrator & Striptekenaar </h3>
        </div>
    )
}
export default Hero