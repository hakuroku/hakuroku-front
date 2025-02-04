
import { usePostComic } from "../hooks/usePostData";
import { useActive, useSelectViewSeries } from "../hooks/activeUIStore";

interface SeriesInfo {
    id: number;
    series_title: string;
    seriesItem: object;
}

export const SelectItemSeries: React.FC<SeriesInfo> = (seriesItem) => {

    const { setSeriesId } = usePostComic();
    const { setSelectViewSeriesTitle } = useSelectViewSeries();
    const { seriesSelect, setSeriesSelect } = useActive();

    if (seriesSelect) {
        return (
            <div>
                <div className="hover:bg-accent_C " onClick={() => { setSelectViewSeriesTitle(seriesItem.series_title); setSeriesSelect(!seriesSelect); setSeriesId(seriesItem.id); }}><span className="hover:cursor-default">{seriesItem.series_title}</span></div>
            </div>
        )
    }
}