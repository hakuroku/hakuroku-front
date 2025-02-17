import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEpisodeData } from "../hooks/useGetData";
import { ComicViewer } from "../components/ComicViewer";
import { EpisodeList } from "./EpisodeList";
import { getData } from "../utils/getData";
import { Episodes } from "../types/stateGetData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { EpisodeContent, EpisodeInfo } from "../types/getData";

export const Episode = () => {
    const { url } = useParams();
    const location = useLocation();

    const { episode, setEpisode } = useEpisodeData();

    useEffect(() => {
        getData<Episodes>(`episode/${url}`)
            .then((data) => setEpisode(data))
            .catch((error) => console.error(error))
    }, [location])


 
    console.log(episode)
    return (
        <>
            <div>
                <ComicViewer />
                <EpisodeList />
            </div>

            <div className="flex justify-center items-center text-white hover:text-accent_C mt-10">
                <Link to='/' className="p-2 block text-xs">Top画面へ戻る</Link>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
        </>
    )
}