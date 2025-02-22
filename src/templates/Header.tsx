import { Link } from "react-router-dom"
import { Logo } from "../components/Logo"
import { FormSearch } from "../utils/FormSearch"

export const Header = () => {
    const userRole = localStorage.getItem('userRole');
    return (
        <div className="bg-main_C shadow-md">
            <div className="flex items-center justify-between mr-4">
                <Link to='/'><Logo/></Link>

                <div className="flex items-center">
                    <ul className='flex items-center gap-4 pr-8'>
                        <Link to='/series'><li className=" hover:text-accent2_C">作品一覧</li></Link>
                       {userRole === 'admin' && (<>
                        <Link to='/dashboard'><li className=" hover:text-accent2_C">ダッシュボード</li></Link>
                        <Link to='/upload/episode'><li className=" hover:text-accent2_C">作品投稿</li></Link>
                       </>)} 
                        
                    </ul>
                    <FormSearch/>
                </div>
            </div>
        </div>
    )
}