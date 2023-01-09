import Image from "next/image"
import { useRouter } from "next/router"
import { sanityClient, urlFor } from "sanity"

const PortfolioItem = ({ portfolioItem }) => {
    const rout = useRouter()
    var { pid } = rout.query

    console.log(portfolioItem);
    
    const { title, subtitle, image, description, tagList } = portfolioItem[0]
    console.log(urlFor(image).url)

    // let currentItem = portfolioItem.map(p => (
 
    // ))

    return (
        <div className="p-20 text-center">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-3xl mb-6"> {title} </h1>
                <h3 className="font-light"> {description} </h3>
                
                
                <Image
                    className="mx-auto"
                    width={1000}
                    height={1000}
                    alt={title}
                    src={urlFor(image).url()}
                    
                />

                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {tagList?.length > 1 ? (tagList.map((t, index) => ( // => Object has Multiply tags
                        <span key={index} className="py-0.5 px-3 border border-black self-start">
                            {t.title}
                        </span>
                    ))
                    ) : ( // => Object has just 1 tag
                        <span className="py-0.5 px-3 border border-black self-start">
                            {tagList[0].title}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem


export const getServerSideProps = async ({ params: {pid} }) => {
    const queryPortfolio = `
        *[_type == "portfolio" && _id == "${pid}" && tags[0]._ref in *[_type == "tags"]._id]| order(_createdAt desc){
            _id,
            title,
            subtitle,
            description,
            image,
            "tagList": tags[0..5] -> {
                title
            }
        }
    `;
    
    const portfolioItem = await sanityClient.fetch(queryPortfolio)
    
    return {
        props: {
            portfolioItem
        }
    };
};