import Image from "next/image"

const About = ({ bio, image }) => {
    const bioText = "Kity kity ears back wide eyed head nudges or stand with legs in liter box, but poop outside pounce on un suspecting person or always ensure to lay down in, such a manner that tail can lightly brush human's nose, so sit in window and stare oooh, a bird, yum."

    console.log(bioText)

    return (
        <div className="flex justify-center items-center mx-auto py-20 max-w-7xl">
            <div className="w-2/3 text-primary m-12">
                <p className="max-w-lg pl-10 leading-6 tracking-wider">
                    {bioText}
                </p>
            </div>
            <div className="w-1/3 m-12">
                <Image
                    width={200}
                    height={200}
                    src={image}
                    alt={image}
                />
            </div>
        </div>
    )
}
export default About