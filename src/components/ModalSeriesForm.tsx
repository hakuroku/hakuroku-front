import { useActive } from "../hooks/activeUIStore";
import { FormSeriesCreate } from "../utils/FormSeriesCreate";

export const ModalSeriesForm = () => {
    
    const {seriesModal,setSeriesModal} = useActive();

    if (seriesModal) {
        return (
            <div>
                <div className="bg-white w-[440px] h-fit m-auto p-6 rounded-lg fixed inset-2/4 translate-x-[-50%]  z-50  text-left">
                    <FormSeriesCreate/>
                    <div className="w-fit m-auto bg-accent_C hover:bg-accent2_C rounded-lg">
                        <button className="py-2 px-20 text-white" onClick={() => { setSeriesModal(false) }}>キャンセルする</button>
                    </div>

                </div>
                <div className="w-full h-screen bg-black/75 inset-0 fixed z-10" onClick={() => { setSeriesModal(false); }}></div>
            </div>
        )
    } else {
        console.log('sFormはfalseです')
    }
}