import { useEffect } from "react"
import { useEpisodeData } from "../hooks/dataStore"
import { ComicViewer } from "./ComicViewer"
import { Series } from "../templates/Series"
import { getData } from "../utils/getData"

export const ComicPage = () => {

    const {episode, setEpisode} = useEpisodeData();

// const comicPages = [
//     './images/I wish/I wish_001.jpg',
//     './images/I wish/I wish_002.jpg',
//     './images/I wish/I wish_003.jpg',
//     './images/I wish/I wish_004.jpg',
//     './images/I wish/I wish_005.jpg',
//     './images/I wish/I wish_006.jpg',
//     './images/I wish/I wish_007.jpg',
//     './images/I wish/I wish_008.jpg',
//     './images/I wish/I wish_009.jpg',
//     './images/I wish/I wish_010.jpg',
//     './images/I wish/I wish_011.jpg',
//     './images/I wish/I wish_012.jpg',
// ]

useEffect(() => {
    getData<{ pages: string[] } | undefined >('episode/I_wish')
    .then((data) => setEpisode(data))
    .catch((error) => console.error(error))
}, [])

console.log(`episode:${episode}`)
    return (
        <div>
            <ComicViewer episode={episode} />
            <Series />
        </div>
        
    )
}