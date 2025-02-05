import { useActive, useSelectViewSeries } from "../hooks/activeUIStore";
import { useSeriesGetData } from "../hooks/useGetData";
import { SelectItemSeries } from "./SelectItemSeries";

export const ButtonSeriesSelect = () => {
    const { series } = useSeriesGetData();
    const { selectViewSeriesTitle } = useSelectViewSeries();
    const { setSeriesModal, seriesSelect, setSeriesSelect } = useActive()


    console.log(series)

    if (series === undefined || series.length === 0) {
        return (
            <div className="w-2/3 h-fit bg-accent2_C hover:bg-accent_C hover:cursor-pointer rounded-md" onClick={() => { setSeriesModal(true) }}>
                <div className="py-1 px-8 text-white">シリーズを作成する</div>
            </div>
        )
    } else if (series.length > 0) {
        return (
            <div className=" bg-gray-100 w-2/3">
                {selectViewSeriesTitle === '' ? (
                    <>
                        <div className="hover:bg-accent_C" onClick={() => { setSeriesSelect(!seriesSelect) }}><span className="hover:cursor-default">シリーズを選択する</span></div>
                        {series.map((s, index) => <SelectItemSeries key={index} seriesItem={s} series_title={s.series_title} id={s.id} />)}
                        {/* シリーズを作成するItem */}
                        {seriesSelect === true ? (<div className="hover:bg-accent_C" onClick={() => { setSeriesModal(true) }}><span className="hover:cursor-default">シリーズを作成する</span></div>) : null}
                    </>
                ) : (
                    <>
                        <div className="hover:bg-accent_C" onClick={() => { setSeriesSelect(!seriesSelect) }}><span className="hover:cursor-default">{selectViewSeriesTitle}</span></div>
                        {series.map((s, index) => (selectViewSeriesTitle !== s.series_title ?
                            <SelectItemSeries key={index} seriesItem={s} series_title={s.series_title} id={s.id} /> : null
                        ))}
                        {seriesSelect === true ? (<div className="hover:bg-accent_C" onClick={() => { setSeriesModal(true) }}><span className="hover:cursor-default">シリーズを作成する</span></div>) : null}
                    </>
                )}
            </div>
        )
    }
}