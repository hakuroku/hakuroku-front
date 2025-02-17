import { useSeriesListGetData } from "../hooks/useGetData"
import { Link } from "react-router-dom";

export const SeriesItem = () => {
    const {seriesList} = useSeriesListGetData();
    return(
        <div className="flex justify-left flex-wrap gap-10 w-3/4 mx-auto ">
        {seriesList ? seriesList.seriesListInfo.map((i, index)=> (
            <Link to={`/episode/${seriesList.seriesListUrl[index+1]}`}><li className="">
                <div className="flex items-center justify-left py-8 hover:bg-white/25">
                <div className="w-40  h-24 border-2 border-white bg-white"></div>
                <div className=' ml-8'>
                <p className="pr-20 text-xl text-white">{i.series_title}</p> 
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