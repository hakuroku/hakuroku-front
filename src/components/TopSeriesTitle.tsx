import { useTopCount } from "../hooks/activeUIStore";

interface topIconImg {
    selectIcon: {
        title: string;
    }[],
}

export const TopSeriesTitle: React.FC<topIconImg> = ({ selectIcon }) => {
    const {count} = useTopCount()
    return (
        
        <div className="absolute left-20 bottom-10">
            {selectIcon.map((i, index) => (count === index ? <div key={index} className="text-[8rem] drop-shadow-xl text-outline">{i.title}</div> : null
        ))}
        </div>
    )
}