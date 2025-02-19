import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export const BackToUploadForm = () => {
    return (
        <div className="flex justify-center items-center text-white hover:text-accent_C">
            <Link to='/upload/episode'><p className="p-2 block text-xs">フォームに戻る</p></Link>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
    )
}