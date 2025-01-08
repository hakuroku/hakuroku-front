import { Link } from "react-router-dom";
import { FormPostData } from "../utils/FormPostData";


export const PostComic = () => {

    return (
        <div>
            <div className="m-auto w-3/4">
                <FormPostData />
            </div>
            <Link to='/' className="text-white hover:text-accent_C p-2 block text-xs">Top画面へ戻る</Link>
        </div>
    )
}