import { useActive } from "../hooks/activeUIStore";
import { FormSeriesCreate } from "../utils/FormSeriesCreate";
import { ModalBack } from "./ModalBack";

export const ModalSeriesForm = () => {
    
    const {seriesModal,setSeriesModal} = useActive();

    return (
        <div>
            {seriesModal ? (
                <div>
                    <div className="bg-main_C w-[440px] h-fit m-auto p-6 rounded-lg fixed inset-2/4 translate-x-[-50%]  z-50  text-left">
                        <FormSeriesCreate/>
                        <div className="w-[240px] text-center m-auto bg-accent_C hover:bg-accent2_C hover:cursor-pointer rounded-lg" onClick={() => { setSeriesModal(false) }}>
                            <div className="py-2 text-white" >キャンセルする</div>
                        </div>
                    </div>
                    <div onClick={()=>{ setSeriesModal(false); }}><ModalBack/></div>
                </div>
            )
                : null }
        </div>
    )
}