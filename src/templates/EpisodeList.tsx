import { EpisodeItem } from "../components/episodeItem";
import { useEpisodeData } from "../hooks/useGetData"

export const EpisodeList = () => {
    const {episode} = useEpisodeData();
    return (
        <div className="text-white text-center text-white pt-8">
            {episode ? <h2 className="text-4xl pb-8">{episode.seriesInfo.series_title}</h2> : null}
            {episode ? 
                <div className="">
                    <p className="text-center w-4/5 m-auto pb-10 border-white border-b-2">&emsp;{episode.seriesInfo.series_caption}</p>
                </div> 
            : null}
            
            <div className="">
                <ul className='w-2/5 m-auto text-left'>
                <EpisodeItem/>
                </ul>
            </div>
        </div>
        
    )
}