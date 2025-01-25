import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEpisodeData } from "../hooks/dataStore";
import { ComicViewer } from "../components/ComicViewer";
import { Series } from "./Series";
import { getData } from "../utils/getData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"; 

export const Episode = () => {
    const { url } = useParams();
    
    const { episode, setEpisode } = useEpisodeData();


    useEffect(() => {
        getData<{ pages: string[] } | undefined>(`episode/${url}`)
            .then((data) => setEpisode(data))
            .catch((error) => console.error(error))
    }, [])

    console.log(episode)
    return (
        <>
        <div>
            <ComicViewer episode={episode} />
            {/* <Series /> */}
        </div>

<div className="flex justify-center items-center text-white hover:text-accent_C mt-10">
<Link to='/' className="p-2 block text-xs">Top画面へ戻る</Link>
 <FontAwesomeIcon icon={faArrowRightFromBracket} />
</div>
</>
    )
}