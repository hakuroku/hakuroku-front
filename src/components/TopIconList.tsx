import { Link } from "react-router-dom";
import { useEffect } from "react";
import { TopCount } from "../hooks/activeUIStore";

interface topIconImg {
    id: number;
    iconImg: string;
    count: number;
}

export const TopIconList: React.FC<topIconImg> = ({id, iconImg, count}) => {
  
    const {setCount} = TopCount();
    const hoverSlide = () => {
        setCount(id);
    } 

    // const link = "/ComicPage/" + id


    return (
            <Link to="/ComicPage"><div className="border-2 border- w-20 h-80 overflow-hidden shadow-xl" id="comic-icon_frame" style={{ borderColor: count === id ? '#ffb433' : 'black', boxShadow: count === id ? '0 0 8px #ffb433' : 'none' }}><img src={iconImg} className="size-full object-cover" onMouseOver={() => { hoverSlide() }}/></div></Link>
    )
}