import { TopCount } from "../hooks/activeUIStore";

interface topIconImg {
    selectIcon: {
        title: string;
    }[],
}

export const TopSeriesTitle: React.FC<topIconImg> = ({ selectIcon }) => {
    const {count} = TopCount()
    return (
        
        <div className="absolute left-10 top-28">
            {selectIcon.map((i, index) => (count === index ? <div className="text-[8rem] drop-shadow-xl text-outline">{i.title}</div> : null
        ))}
        </div>
    )
}