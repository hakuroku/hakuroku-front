import { useEffect } from "react";
import { useTopCount } from "../hooks/activeUIStore";
import { useTopInfo } from "../hooks/useGetData";
import TopIconList from "../components/TopIconList";
import { TopSeriesTitle } from "../components/TopSeriesTitle";
import { getData } from "../utils/getData";
import { TopInfos } from "../types/stateGetData";
import { Logo } from "../components/Logo";


export const Top = () => {
    const { topInfo, setTopInfo } = useTopInfo()
    const { count, setCount } = useTopCount();

    // -------------------------clickSlider---------------------
    const plusCount = () => {
        if (topInfo){
            const imgsLength = topInfo.seriesMainImg.length - 1
            if (count < imgsLength) {
                setCount(count + 1)
            } else {
                setCount(0)
            }
        } 
    }

    // -------------------------autoSlider---------------------
    useEffect(() => {
        getData<TopInfos>('get/top-info')
            .then((data) => setTopInfo(data))
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        const interval = setInterval(plusCount, 6000);
        return () => clearInterval(interval)
    }, [count])

    

    console.log(topInfo)
    return (
        <div className="relative">
            {topInfo && topInfo.seriesMainImg ? (Object.entries(topInfo.seriesMainImg).map(([key, value]) => (
                     <div key={key} className="h-screen relative bg-cover bg-center animate-fadeIn" style={{
                        backgroundImage: `url(${value})`}}> 
                        <div className="w-full h-screen bg-black/40 "></div>
                    </div>
                    ))) : ( <div className="w-screen h-screen bg-cover bg-center" style={{backgroundImage: `url(/images/sample1.jpg)`}}>
                        <div className="w-full h-screen bg-black/40 "></div>
                        </div>)}
            
            <TopSeriesTitle topInfo={topInfo} />
            <div className="absolute top-0 bg-main_C"><Logo/></div>
            <TopIconList topInfo={topInfo} />
        </div>
    );
}