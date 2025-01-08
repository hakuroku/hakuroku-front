import { usePostData } from "../hooks/dataStore";
import { useActive } from "../hooks/activeUIStore";

interface SeriesInfo {
    series_id: number;
    series_title: string;
    seriesItem: object;}

export const SelectItemSeries: React.FC<SeriesInfo> = (seriesItem) => {
    const { setSeriesTitle, setSeriesId } = usePostData();
    const { seriesSelect, setSeriesSelect } = useActive();

    if (seriesSelect) {
        return (
            <div>
                <div className="hover:bg-accent_C " onClick={() => { setSeriesTitle(seriesItem.series_title); setSeriesSelect(!seriesSelect); setSeriesId(seriesItem.series_id);  }}><span className="hover:cursor-default">{seriesItem.series_title}</span></div>
            </div>

        )

    }
}