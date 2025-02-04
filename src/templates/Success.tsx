import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export const Success = () => {

    return (
        <div className="h-[80v]">
            <p className="text-white text-center">データが正常にアップロードされました。</p>
            <div className="flex justify-center items-center text-white hover:text-accent_C">
                <Link to='/postComic'><p className="p-2 block text-xs">フォームに戻る</p></Link>
                <FontAwesomeIcon icon={ faArrowRightFromBracket}/>
            </div>
        </div>
        
    )
}