import { useState, useEffect } from "react";
import { TopCount } from "../hooks/activeUIStore";
import { useTopInfo } from "../hooks/useGetData";
import TopIconList from "../components/TopIconList";
import { TopSeriesTitle } from "../components/TopSeriesTitle";
import { temporaryIconItem } from "../hooks/interface/temporaryImgData";
import { getData } from "../utils/getData";
import { TopInfos } from "../types/stateGetData";

export const Top = () => {
    const { topInfo, setTopInfo } = useTopInfo()
    const { count, setCount } = TopCount();
    const [fadeInKey, setFadeInKey] = useState(0);
    // -------------------------データ（仮）---------------------

    const selectIcon: temporaryIconItem[] = [
        {
            topImg: './images/sample1.jpg',
            iconImg: './images/icon1.jpg',
            title: '作品名1',
            url: 'jhfffjsnfjvvjsdkfjsbf'
        },
        {
            topImg: './images/sample2.jpg',
            iconImg: './images/icon2.jpg',
            title: '作品名2',
            url: 'fksfnokfknlkndfsf'
        },
        {
            topImg: './images/sample3.jpg',
            iconImg: './images/icon3.jpg',
            title: '作品名3',
            url: 'knskdhklsmfasnmljvjks'
        },
        {
            topImg: './images/sample4.jpg',
            iconImg: './images/icon4.jpg',
            title: '作品名4',
            url: 'jfjksjfksfkskssknf'
        },
        {
            topImg: './images/sample5.jpg',
            iconImg: './images/icon5.jpg',
            title: '作品名5',
            url: 'oksnfkndskfnsksdkfn'
        }
    ];

    // -------------------------clickSlider---------------------
    const imgsLength = selectIcon.length - 1
    // const minusCount = () => {
    //     if (count > 0) {
    //         setCount(count - 1)
    //     } else {
    //         setCount(imgsLength)
    //     }
    // }

    const plusCount = () => {
        if (count < imgsLength) {
            setCount(count + 1)
        } else {
            setCount(0)
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
        setFadeInKey(prev => prev + 1);
        return () => clearInterval(interval)
    }, [count])


    console.log(topInfo)
    return (
        <div>
            <div key={fadeInKey} className="h-screen relative bg-cover bg-center animate-fadeIn" style={{
                backgroundImage: `url(${selectIcon[count].topImg})`,
            }}>
                <TopSeriesTitle selectIcon={selectIcon} />
                <div className="w-full h-screen bg-black/40 ">
                </div>
            </div>
            <TopIconList selectIcon={selectIcon} />
        </div>
    )
}