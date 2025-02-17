import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAddIconData } from "../hooks/useAddIcon";

export const FormDeleteIcon = () => {
    const navigate = useNavigate()
    const { addSeriesId, setAddSeriesId} = useAddIconData();

    console.log(addSeriesId)
    const UpdateIcon = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/update/delete-icon'
            const formData = new FormData();
            const data = {
                'series_Id': addSeriesId?.toString(),
            }
            if (addSeriesId){
                formData.append('series_id', addSeriesId.toString())
            }
            const response = await axios.post(url, formData, {
                headers: {
                }
            });
            console.log('Response:', response.data)
            navigate('/success')
        } catch {

        }
    }

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        UpdateIcon();
    }

    return (
        <div className="text-center" >
            <form onSubmit={handlePostSubmit} encType="multipart/form-data">
                <input type="number" name="addIconSeriesId" onChange={(e)=>setAddSeriesId(Number(e.target.value))}/><br />
                <button type="submit" className="bg-red"><span>アイコンを削除する</span></button>
            </form>
        </div>
    )
}