import { TopCount } from "../hooks/activeUIStore";

interface topIconImg {
    id: number;
    iconImg: string;
}

export const TopIconList: React.FC<topIconImg> = ({id, iconImg}) => {

    const {setCount} = TopCount();
    const hoverSlide = () => {
        setCount(id);
    } 

    return (
            <div className="border-2 w-16 h-64 overflow-hidden shadow-xl" id="comic-icon_frame" ><img src={iconImg} className="size-full" onMouseOver={() => { hoverSlide() }}/></div>
    )
}