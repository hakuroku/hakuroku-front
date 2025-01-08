import { useActive } from "../hooks/activeUIStore";
import { usePostData, useSeriesGetData } from "../hooks/dataStore"

const { setSeriesTitle, setSeriesId } = usePostData();
const { series } = useSeriesGetData();
const { setSeriesModal, seriesSelect, setSeriesSelect } = useActive();

export const SelectItemSeries = () => {
    if (seriesSelect) {
        return (
            <div>
                {series.map(s => (
                    <div className="hover:bg-accent_C " onClick={() => { setSeriesTitle(s.series_title); setSeriesSelect(!seriesSelect); setSeriesId(s.series_id) }}><span className="hover:cursor-default">{s.series_title}</span></div>
                ))}
                <div className="hover:bg-accent_C" onClick={() => { setSeriesModal(true) }}><span className="hover:cursor-default">シリーズを作成する</span></div>
            </div>

        )

    } else {
        console.log('データは入っていません。')
    }
}