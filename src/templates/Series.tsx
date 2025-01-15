import { ComicsItem } from "../components/ComicsItem"
// import { getData } from "../utils/getData";
// import { useSeriesGetData } from "../hooks/dataStore"
// import { GetSeriesDataStore } from "../hooks/interface/comicData";
// import { useEffect } from "react";


export const Series = () => {

    // const { series, setSeries} = useSeriesGetData();

    // useEffect(() => {
    //     const seriesData: Promise<{series_id: number, series_title: string}[]> = getData('getSeries')
    //     setSeries(seriesData);
    //     console.log(seriesData)
    // }, [])
    return (
        <div className="text-white text-center text-white pt-8">

            
            
            {/* タイトル */}
            <h2 className="text-4xl pb-8">I Wish</h2>
            {/* キャプション */}
            <div className="">
                <p className="text-left w-4/5 m-auto pb-10 border-white border-b-2">&emsp;太平洋の深海から日本へ留学にやってきた半魚人の"半魚郎"は今年で大学４回生。夏季休暇に入ってから就職活動で慌しく動いている周囲を横目に毎日アルバイト生活に明け暮れていた彼の最近の関心は、もっぱら地球温暖化による海面上昇問題。そんなある日、大学の同級生"山下"から、友人の失踪の一報を受け…。(caption)</p>
            </div>


            {/* リスト */}
            <div className="">
                <ul className='w-2/5 m-auto text-left'>
                    <ComicsItem />
                </ul>
            </div>
        </div>
        
    )
}