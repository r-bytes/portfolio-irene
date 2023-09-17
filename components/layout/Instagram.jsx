import { Button } from "@components/index"
import { IconButton } from "@material-ui/core"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Instagram = () => {
    // const instagramItems = [
    //     { id: 1, name: "item1" },
    //     { id: 2, name: "item2" },
    //     { id: 3, name: "item3" },
    //     { id: 4, name: "item4" },
    //     { id: 5, name: "item5" },
    //     { id: 6, name: "item6" }
    // ]

    const [posts, setPosts] = useState([])
    const [username, setUsername] = useState("")
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=username,media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_INSTA}`)
            setPosts(response.data.data)
            setUsername(response.data.data[0].username)
        })()
    }, [])

    const instagramItems = posts.filter(p => p.media_type === "IMAGE")
    
    const handleClick = (url) => {
        router.push(url)
    }

    return (
        <>
            <h1 className="mt-8 text-3xl font-thin tracking-wider"> Volg mij online </h1>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {instagramItems.length ? instagramItems.map(i => (
                    <IconButton
                    style={{ borderRadius: "0px", padding: "0px"}}
                        key={i.id}
                        onClick={() => handleClick(i.permalink)}

                    >

                        <Image
                            className="justify-self-center w-96 h-96 md:w-72 md:h-72 lg:w-64 lg:h-64 cursor-pointer"
                            src={i.media_url}
                            alt={i.caption}
                            width={500}
                            height={500}
                            />
                    </IconButton>
                )): ""}
            </div>
            <div className="pb-8">
                <Button text={"Instagram"} href={`https://www.instagram.com/${username}`} primary />
            </div>
        </>
    )
}
export default Instagram