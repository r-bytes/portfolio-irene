import Image from "next/image"

const About = ({ bio, image }) => {
    return (
        <div className="flex justify-center items-center mx-auto py-20 max-w-5xl">
            <div className="w-2/3 text-primary m-12">
                <p className="max-w-2xl pl-10 leading-6 tracking-wider">
                    {bio}
                </p>
            </div>
            <div className="self-start w-2/3 m-12">
                <Image
                    width={1000}
                    height={100}
                    src={image}
                    alt={image}
                />
            </div>
        </div>
    )
}
export default About