import Image from "next/image"

const About = ({ bio, image }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto p-10 lg:p-20 max-w-5xl">
            <div className="order-2 lg:w-5/6 text-primary">
                <p className="text-center mx-auto lg:text-left leading-6 tracking-wider">
                    {bio}
                </p>
            </div>
            <div className="order-1 lg:order-2 lg:w-2/3 mb-10">
                <Image
                    className="w-full lg:ml-16 lg:pr-10"
                    width={500}
                    height={500}
                    src={image}
                    alt={image}
                />
            </div>
        </div>
    )
}
export default About