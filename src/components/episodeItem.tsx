import { useEpisodeData } from "../hooks/useGetData";
import { Link } from "react-router-dom";

export const EpisodeItem = () => {
    const {episode} = useEpisodeData();
    return(
        <div className="mx-10">
        {episode ?episode.episodeInfo.map((i)=> (
            <Link to={`/episode/${i.episode_url}`}><li className="">
                <div className="flex items-center justify-left py-8 hover:bg-white/25">
                <div className="w-40  h-24 border-2 border-white bg-white"></div>
                <div className=' ml-8'>
                <time dateTime={`${i.updated_at}`}>{i.updated_at}</time>
                <p className="pr-20 text-xl text-white">{i.episode_title}</p> 
                </div>
                </div>
            </li></Link>
        )) 
        : <div>
            <p className="text-center text-xl text-white">データが取得できませんでした。</p>
        </div> } 
        </div> 
    )
}