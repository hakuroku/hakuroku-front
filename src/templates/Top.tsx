import { useState, useEffect } from "react";
// import { TopImgsView } from "../components/TopImgsView";
import { TopCount } from "../hooks/activeUIStore";
import TopIconList from "../components/TopIconList";
import { temporaryIconItem } from "../hooks/interface/temporaryImgData";

export const Top = () => {

    const {count, setCount} = TopCount();
    const [fadeInKey, setFadeInKey] = useState(0);
// -------------------------データ（仮）---------------------

    const selectIcon: temporaryIconItem[] = [
        {

            topImg: './images/sample1.jpg',
            iconImg: './images/icon1.jpg'
        },
        {
            topImg: './images/sample2.jpg',
            iconImg: './images/icon2.jpg'
        },
        {
            topImg: './images/sample3.jpg',
            iconImg: './images/icon3.jpg'
        },
        {
            topImg: './images/sample4.jpg',
            iconImg: './images/icon4.jpg'
        },
        {
            topImg: './images/sample5.jpg',
            iconImg: './images/icon5.jpg'
        }
    ];

// -------------------------clickSlider---------------------
    const imgsLength = selectIcon.length -1
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
    const interval = setInterval(plusCount, 6000);
    setFadeInKey(prev => prev + 1);
    return () => clearInterval(interval)
}, [count])

    return (
        <div>
            <div key={fadeInKey} className="h-screen relative bg-cover bg-center animate-fadeIn" style={{ 
                backgroundImage: `url(${selectIcon[count].topImg})`,
                
            
            }}>
                <div className="w-full h-screen bg-black/40 ">
                {/* <div className="flex justify-around items-center w-4/5 m-auto py-10">
                    <img src="./images/allow-left.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75" onClick={() => {minusCount()}} />
                    <div className="w-4/5 h-[500px] m-auto shadow-md shadow-main_C border-2 border-main_C overflow-hidden">
                            {selectIcon.map((t, index) => {
                                if (count == index) {
                                    return <TopImgsView {...t} key={index}  topImg={t.topImg}/>
                                }
                            })}
                    </div>
                    <img src="./images/allow-right.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75" onClick={() => {plusCount()}} />
                </div> */}
                
                </div>
            </div>
            <TopIconList selectIcon={selectIcon}/>
        </div>
    )
}