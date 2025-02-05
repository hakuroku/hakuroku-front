import { Link } from "react-router-dom" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
export const NotFound = () => {
   return (
    <div className="text-white text-center h-[80vh]">
        <div className="pt-[20vh] mb-6">
           <p>お探しのページは見つかりませんでした。</p>
           <p>以下のリンクから改めて作品をお探しください。</p>
        </div>
         <div className="flex justify-center items-center text-white hover:text-accent_C">
           <Link to='/' className="p-2 block text-xs">Top画面へ戻る</Link>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
        <div className="flex justify-between px-8">
            <img src="./images/デジカル君1.png" alt="" />
            <img src="./images/デジカル君1.png" alt="" />
        </div>
    </div>
   )
}