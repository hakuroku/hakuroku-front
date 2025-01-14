import { ComicViewer } from "./ComicViewer"
import { Series } from "../templates/Series"

export const ComicPage = () => {

const comicPages = [
    './images/I wish/I wish_001.jpg',
    './images/I wish/I wish_002.jpg',
    './images/I wish/I wish_003.jpg',
    './images/I wish/I wish_004.jpg',
    './images/I wish/I wish_005.jpg',
    './images/I wish/I wish_006.jpg',
    './images/I wish/I wish_007.jpg',
    './images/I wish/I wish_008.jpg',
    './images/I wish/I wish_009.jpg',
    './images/I wish/I wish_010.jpg',
    './images/I wish/I wish_011.jpg',
    './images/I wish/I wish_012.jpg',
]

    return (
        <div>
            <ComicViewer pages={comicPages} />
            <Series />
        </div>
        
    )
}