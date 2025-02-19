import { BackToUploadForm } from "../components/BackToUploadForm"

export const Success = () => {

    return (
        <div>
            <p className="text-white text-center mt-[20vh] text-[1rem]">データが正常にアップロードされました。</p>
            <BackToUploadForm/>
        </div>
        
    )
}