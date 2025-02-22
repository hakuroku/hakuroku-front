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
            const entries = Object.entries(topInfo.seriesMainImg)
            const imgsLength = entries.length - 1;
            console.log(imgsLength)
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
            .then((data) => {
                setTopInfo(data)
                setCount(0)
            })
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        if (topInfo) {
            const interval = setInterval(plusCount, 6000);
            return () => clearInterval(interval)
        }
    }, [ topInfo, count])

    const data = localStorage.getItem('user')
    console.log(data)
    return (
        <div className="relative">
            {topInfo && topInfo.seriesMainImg.length !== 0 ? (Object.entries(topInfo.seriesMainImg).map(([key, value], index) => (
                 index === count ? (
                    <div key={key} className="h-screen relative bg-cover bg-center animate-fadeIn" style={{
                        backgroundImage: `url(${value})`}}> 
                        <div className="w-full h-screen bg-black/40 "></div>
                    </div>) : null   
                    ))) : ( <div className="w-screen h-screen bg-cover bg-center" style={{backgroundImage: `url(/images/sample1.jpg)`}}>
                        <div className="w-full h-screen bg-black/40 "></div>
                        </div>)}
            
            <TopSeriesTitle topInfo={topInfo} />
            <div className="absolute top-0"><Logo/></div>
            <TopIconList topInfo={topInfo} />
        </div>
    );
}