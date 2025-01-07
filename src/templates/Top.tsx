import { TopImgsView } from "../components/TopImgsView";
import { ImgsCount } from "../hooks/activeUIStore";
import { ListContainer } from "../components/ListContainer";

export const Top = () => {

    const {count} = ImgsCount();
// -------------------------データ（仮）---------------------
interface iconItem {
    topImg: string;
    iconImg: string;
}

    const selectIcon: iconItem[] = [
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

    return (
        <div>
            <div className="flex justify-around items-center w-4/5 m-auto py-10">
                <img src="./images/allow-left.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75"  />
                <div className="w-4/5 h-[500px] m-auto shadow-md shadow-main_C border-2 border-main_C overflow-hidden">
                    <div className="w-screen h-full" >
                        {selectIcon.map((t, index) => {
                            if (count == index) {
                                return <TopImgsView {...t} key={index}  topImg={t.topImg}/>
                            }
                        })}
                    </div>
                </div>
                <img src="./images/allow-right.svg" className="w-10 px-2 py-8 bg-main_C hover:bg-main_C/75"  />
            </div>
            <div id="list-container"></div>
            <div className="flex justify-around w-3/5 mx-auto mb-20">
                {selectIcon.map((i, index) => <ListContainer {...i} key={index} iconImg={i.iconImg}/>)}
            </div>
        </div>
    )
}