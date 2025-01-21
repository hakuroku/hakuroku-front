import { Link } from "react-router-dom" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
export const NotFoundPage = () => {
   return (
    <div className="text-white text-center h-[80vh]">
        <div className="pt-[20vh] mb-6">
           <p>お探しのページは見つかりませんでした。</p>
           <p>以下のリンクから改めて作品をお探しください。</p>
        </div>
        <div className="flex justify-center items-center">
           <Link to='/' className="text-white hover:text-accent_C p-2 block text-xs">Top画面へ戻る</Link>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
    </div>
   )
}