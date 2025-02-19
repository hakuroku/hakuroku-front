import { FormUploadData } from "../utils/FormUploadData";
import { BackToTop } from "../components/BackToTop";


export const UploadEpisode = () => {

    return (
        <div className="h-full">
            <div className="m-auto w-3/4 ">
                <FormUploadData />
            </div>
            <div className="absolute bottom-0 pl-2"><BackToTop position={'left'}/></div>
        </div>
    )
}