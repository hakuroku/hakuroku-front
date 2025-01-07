import { useEffect } from "react";
import { TopImgsView } from "../components/TopImgsView";
import { TopCount } from "../hooks/activeUIStore";
import { TopIconList } from "../components/TopIconList";
import { temporaryIconItem } from "../hooks/interface/temporaryImgData";

export const Top = () => {

    const {count, setCount} = TopCount();
// -------------------------データ（仮）---------------------

    const selectIcon: temporaryIconItem[] = [
        {

            topImg: './images/1.png',
            iconImg: './images/1.png'
        },
        {
            topImg: './images/a.png',
            iconImg: './images/a.png'
        },
        {
            topImg: './images/b.png',
            iconImg: './images/b.png'
        },
        {
            topImg: './images/c.png',
            iconImg: './images/c.png'
        },
        {
            topImg: './images/d.png',
            iconImg: './images/d.png'
        }
    ];

// -------------------------clickSlider---------------------
    const imgsLength = selectIcon.length -1
    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(imgsLength)
        }
    }

    const plusCount = () => {
        if (count < imgsLength) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

// -------------------------autoSlider---------------------

useEffect(() => {
    const interval = setInterval(plusCount, 5000);
    return () => clearInterval(interval)
}, [count])




    return (
        <div>
            <div className="flex justify-around items-center w-4/5 m-auto py-10">
                <img src="./images/allow-left.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75" onClick={() => {minusCount()}} />
                <div className="w-4/5 h-[500px] m-auto shadow-md shadow-main_C border-2 border-main_C overflow-hidden">
                    <div className="w-screen h-full" >
                        {selectIcon.map((t, index) => {
                            {console.log(count)}
                            if (count == index) {
                                return <TopImgsView {...t} key={index}  topImg={t.topImg}/>
                            }
                        })}
                    </div>
                </div>
                <img src="./images/allow-right.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75" onClick={() => {plusCount()}} />
            </div>
            <div id="list-container"></div>
            <div className="flex justify-around w-3/5 mx-auto mb-20">
                {selectIcon.map((i, index) => <TopIconList {...i} key={index} id={index} iconImg={i.iconImg}/>)}
            </div>
        </div>
    )
}