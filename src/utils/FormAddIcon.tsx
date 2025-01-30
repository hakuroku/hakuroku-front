import axios from "axios";
import { useTopInfo } from "../hooks/useGetData" 

export const FormAddIcon = () => {
    const {topInfo} = useTopInfo();

    const PostAddIcon = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/???'
            

            const response = axios.patch(url,) 
        } catch {

        }
    }

    return (
        <div>
            <form action="">
                {topInfo ? topInfo.map((item, index) => (
                    <div>{item.seriesTitle}</div>
                )) : null}
            </form>
        </div>
    )
}