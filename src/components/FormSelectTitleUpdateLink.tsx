import { useModalTopLinksSelect } from "../hooks/activeUIStore";
import { useSeriesTitlesGet } from "../hooks/useGetData";
import { useSelectSeriesDashBoard } from "../hooks/activeUIStore";
import { SelectBar } from "./selectBar";

interface Item {
    item: string;
    setState: (n:number) => void
}
export const FormSelectTitleUpdateLink: React.FC<Item> = ({item, setState}) => {
    const { seriesSelect, setSeriesSelect} = useModalTopLinksSelect();
    const { seriesTitles} = useSeriesTitlesGet();
    const { seriesTitle, setSeriesTitle } = useSelectSeriesDashBoard();

console.log(seriesSelect)
    return (
        <>
            <div className="flex justify-center">
                <p className="text-center">{item}</p>
                <div>
                    <div onClick={()=> setSeriesSelect(!seriesSelect)}><SelectBar title={seriesTitle} />
                            {seriesTitles && seriesSelect ? (seriesTitles.map((i, index) => ( 
                                i.series_title !== seriesTitle ?
                                <div onClick={() => { setState(i.id); setSeriesTitle(i.series_title) }}><SelectBar title={i.series_title} key={index} /></div>
                            : null
                            ))) : null}
                    </div>
                </div>
            </div>
        </>
    )
}