import { memo } from "react";
import { Link } from "react-router-dom";
import { TopCount } from "../hooks/activeUIStore";
import { useTopInfo } from "../hooks/dataStore";

interface topIconImg {
    selectIcon: {
        topImg: string;
        iconImg: string;
        url: string
    }[],
}

const TopIconList: React.FC<topIconImg> = ({ selectIcon }) => {
  
    const {count, setCount} = TopCount();
    const {topInfo, setTopInfo} = useTopInfo();
    return (
            <div className="flex flex-row-reverse justify-right gap-20 absolute bottom-[-5rem] right-20">
                    {selectIcon.map((i, index) => (
                            <div key={i.iconImg} className="border-2 border- w-20 h-80 overflow-hidden shadow-xl" id="comic-icon_frame" style={{ borderColor: count === index ? '#ffb433' : 'black', boxShadow: count === index ? '0 0 8px #ffb433' : 'none' }}>
                                <Link to={`/episode/${i.url}`}>
                                    <img src={i.iconImg} className="size-full object-cover" onMouseOver={() => { setCount(index); console.log(topInfo?.urls.indexOf) }} />
                                </Link>
                            
                            </div>
                        ))}
            </div>
        
            
    )
}

export default memo(TopIconList)