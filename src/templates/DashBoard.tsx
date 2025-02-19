import { ButtonListTopLink } from "../components/ButtonListTopLink";
import { FormAddIcon } from "../utils/FormAddIcon";
import { FormChangeIcon } from "../utils/FormChangeIcon";
import { FormDeleteIcon } from "../utils/FormDeleteIcon";
import { useModalIcon} from "../hooks/activeUIStore";
export const DashBoard = () => {
    
    const {modalAddIcon, modalChangeIcon, modalDeleteIcon} = useModalIcon()

    return (
        <>
            <p className="mt-8 mx-auto px-8 py-4 bg-main_C w-fit text-xl font-bold font-serif">Top画面</p>
            <div className="bg-main_C w-[400px] mx-auto p-8 ">
                
                <ButtonListTopLink/>
            </div>
        {modalAddIcon ? <FormAddIcon /> : null}
        {modalChangeIcon ? <FormChangeIcon/> : null}
        {modalDeleteIcon ? <FormDeleteIcon/> : null}
        </>
    )
}