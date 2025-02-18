import { TopInfos } from "../types/stateGetData";
import { useTopCount } from "../hooks/activeUIStore";

interface TopInfo {
    topInfo: TopInfos
}

export const TopSeriesTitle: React.FC<TopInfo> = ({ topInfo }) => {
    const {count} = useTopCount()
    return (
        <div className="absolute left-20 bottom-10">
          {topInfo && topInfo.seriesTitle ? (
            Object.entries(topInfo.seriesTitle).map(([key, value], index) => (
              count === index ? (
                <div key={key} className="text-[8rem] drop-shadow-xl text-outline">
                  {value}
                </div>
              ) : null
            ))
          ) : null}
        </div>
      );
}