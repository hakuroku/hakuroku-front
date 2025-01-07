import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="bg-main_C shadow-md">
            <div className="flex items-center justify-between mr-4">
                <Link to='/'><img className='w-24 m-5' src="./images/hakuroku_logo3.png" alt="logo" /></Link>

                <div className="flex items-center">
                    <ul className='flex items-center gap-4 pr-8'>
                        <li className=" hover:text-accent2_C">ダッシュボード</li>
                        <li className=" hover:text-accent2_C">作品投稿</li>
                    </ul>
                    <input type="search" className="border-2 outline-none px-1" />
                    <button className="p-1 border-2 bg-white">
                        <img className="w-4" src="./images/search_icon.svg" alt="サーチのアイコン" />
                    </button>
                </div>
            </div>
        </div>
    )
}