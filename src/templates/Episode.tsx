import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEpisodeData } from "../hooks/useGetData";
import { ComicViewer } from "../components/ComicViewer";
import { ComicsItems } from "./ComicItems";
import { getData } from "../utils/getData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { EpisodeContent, EpisodeInfo } from "../types/getData";

export const Episode = () => {
    const { url } = useParams();

    const { episode, setEpisode } = useEpisodeData();


    useEffect(() => {
        const getEpisodeData = async () => {
            try {
                const [res1, res2] = await Promise.all([
                    getData<EpisodeContent>(`episode/${url}`),
                    getData<EpisodeInfo>('get/episode')
                ]);

                const episodeData = {
                    episodeContent: res1 ? { pages: res1.pages } : { pages: [] },
                    episodeInfo: res2 || []
                };

                setEpisode(episodeData);

            } catch (error) {
                console.log()
            }
        }
        getEpisodeData();
    }, [])

    console.log(episode)
    return (
        <>
            <div>
                <ComicViewer episode={episode} />
                <ComicsItems />
            </div>

            <div className="flex justify-center items-center text-white hover:text-accent_C mt-10">
                <Link to='/' className="p-2 block text-xs">Top画面へ戻る</Link>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
        </>
    )
}