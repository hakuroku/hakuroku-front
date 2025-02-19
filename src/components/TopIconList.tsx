import { memo } from "react";
import { Link } from "react-router-dom";
import { useTopCount } from "../hooks/activeUIStore";
import { TopInfos } from "../types/stateGetData";
// import { useTopInfo } from "../hooks/useGetData";

interface TopInfo {
    topInfo: TopInfos
}

const TopIconList: React.FC<TopInfo> = ({ topInfo }) => {

    const { count, setCount } = useTopCount();
    // const { topInfo } = useTopInfo();
    return (
        <div className="flex flex-row-reverse justify-right gap-20 absolute bottom-[2rem] right-20">
            
            {topInfo && topInfo.seriesLinkImg ? (Object.entries(topInfo.seriesLinkImg).map(([key, value], index) => (
                <div key={key} className="border-2 w-20 h-80 overflow-hidden shadow-xl" id="comic-icon_frame" style={{ borderColor: count === index ? '#ffb433' : 'black', boxShadow: count === index ? '0 0 20px #ffb433' : 'none' }}>
                    <Link to={`/episode/${topInfo.episodeUrl[index+1]}`}>
                        <img src={value} className="size-full object-cover" onMouseOver={() => { setCount(index); }} />
                    </Link>
                </div>
            ))) : null}
        </div>


    )
}

export default memo(TopIconList)