import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"

interface Position {
    position: string;
}

export const BackToTop: React.FC<Position> = ({ position }) => {
    return (
            <div className={`flex justify-${position} items-center text-white hover:text-accent_C`}>
                <Link to='/' className="p-2 block text-xs">Top画面へ戻る</Link>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
    )
}