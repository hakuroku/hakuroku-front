import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
    return (
        <div className="bg-main_C shadow-md">
            <div className="flex items-center justify-between mr-4">
                <Link to='/'><img className='w-16 sm:w-24 m-4 sm:m-5' src="/images/hakuroku_logo3.png" alt="logo" /></Link>

                <div className="flex items-center">
                    <ul className='flex items-center gap-4 pr-8'>
                        <Link to='/series'><li className=" hover:text-accent2_C">作品一覧</li></Link>
                        <Link to='/dashboard'><li className=" hover:text-accent2_C">ダッシュボード</li></Link>
                        <Link to='/upload/episode'><li className=" hover:text-accent2_C">作品投稿</li></Link>
                    </ul>
                    <input type="search" className="border-2 outline-none px-1" />
                    <button className="px-1 border-2 bg-white">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </div>
    )
}