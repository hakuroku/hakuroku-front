import { memo } from "react";
import { Link } from "react-router-dom";
import { TopCount } from "../hooks/activeUIStore";

interface topIconImg {
    selectIcon: {
        topImg: string,
        iconImg: string
    }[],
}

const TopIconList: React.FC<topIconImg> = ({ selectIcon }) => {
  
    const {count, setCount} = TopCount();

    // const link = "/ComicPage/" + id


    return (
            <div className="flex justify-right gap-20 absolute bottom-[-5rem] right-20">
                    {selectIcon.map((i, index) => (
                            <div key={i.iconImg} className="border-2 border- w-20 h-80 overflow-hidden shadow-xl" id="comic-icon_frame" style={{ borderColor: count === index ? '#ffb433' : 'black', boxShadow: count === index ? '0 0 8px #ffb433' : 'none' }}>
                            <Link to="/ComicPage">
                                <img src={i.iconImg} className="size-full object-cover" onMouseOver={() => { setCount(index) }}/>
                            </Link>
                            </div>
                        ))}
            </div>
        
            
    )
}

export default memo(TopIconList)