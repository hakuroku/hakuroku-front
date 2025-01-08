import { useActive } from "../hooks/activeUIStore";
import { usePostData, useSeriesGetData } from "../hooks/dataStore"
import { SelectItemSeries } from "./SelectItemSeries";

export const ButtonSeriesSelect = () => {
    const { series } = useSeriesGetData();
    const { series_title } = usePostData();
    const { setSeriesModal, seriesSelect, setSeriesSelect }= useActive()
    console.log(series_title) 
    if (series.length === 0) {
        return (
            <div className="w-60 h-fit mb-10 bg-accent2_C hover:bg-accent_C rounded-md" onClick={() => { setSeriesModal(true) }}>
                <div className="py-1 px-8 text-white">シリーズを作成する</div>
            </div>
        )
    } else if (series.length > 0) {
        return (
            <div className="border-2 bg-white w-60">
                {series_title === undefined || '' ? (
                    <>
                        <div className="hover:bg-accent_C" onClick={() => { setSeriesSelect(!seriesSelect) }}><span className="hover:cursor-default">シリーズを選択する</span></div>
                        {series.map((s,index) => <SelectItemSeries key={index} seriesItem={s} series_title={s.series_title} series_id={s.series_id}/> )}
                        
                    </>
                    ) : (
                    <>
                        <div className="hover:bg-accent_C" onClick={() => { setSeriesSelect(!seriesSelect) }}><span className="hover:cursor-default">{series_title}</span></div>
                            {series.map((s,index) => <SelectItemSeries key={index} seriesItem={s} series_title={s.series_title} series_id={s.series_id} />)}
                            
                            {seriesSelect === true ? (<div className="hover:bg-accent_C" onClick={() => { setSeriesModal(true) }}><span className="hover:cursor-default">シリーズを作成する</span></div>) : null}
                    </>
                )
                }
            </div>
        )
    }
}