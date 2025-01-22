import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEpisodeData } from "../hooks/dataStore";
import { ComicViewer } from "../components/ComicViewer";
import { Series } from "./Series";
import { getData } from "../utils/getData";

export const Episode = () => {
    const { url } = useParams();
    
    const { episode, setEpisode } = useEpisodeData();


    useEffect(() => {
        getData<{ pages: string[] } | undefined>(`episode/884ae67e-932f-491b-8434-cae395d60695`)
            .then((data) => setEpisode(data))
            .catch((error) => console.error(error))
    }, [])

    // console.log(`episode:${episode}`)
    return (
        <div>
            <ComicViewer episode={episode} />
            <Series />
        </div>

    )
}