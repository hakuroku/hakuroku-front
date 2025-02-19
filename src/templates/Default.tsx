import { BackToUploadForm } from "../components/BackToUploadForm"

export const Default = () => {

    return (
        <div>
            <p className="text-white text-center mt-[20vh] text-[1rem]">アップロードに失敗しました。<br/>フォームに戻ってやり直してください。</p>
            <BackToUploadForm/>
        </div>
        
    )
}