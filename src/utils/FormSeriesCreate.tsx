import axios from "axios";
import { usePostData, useSeriesGetData} from "../hooks/dataStore";
import { useActive } from "../hooks/activeUIStore";
import { getData } from "./getData";



export const FormSeriesCreate  = () => {
    const { series_title, series_caption, setSeriesTitle, setSeriesCaption} = usePostData();
    const {setSeries} = useSeriesGetData();
    const {setSeriesModal} = useActive();
// -------------------------データ送信---------------------
    const postData = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/series_create'
            const data = {
                series_title: series_title,
                series_caption: series_caption
            }
            const response = await axios.post(url, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            console.log('Response:', response.data);
            await getData<{series_id: number, series_title: string}[]>('getSeries')
            .then((data) => setSeries(data))
            .catch((error) => console.error(error))
            setSeriesModal(false)
        } catch {
            console.error('データの送信が失敗しました')
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        postData();
    } 

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">

            <p className="border-b py-4"><span className="mr-4">シリーズ名</span><input type="text" name="series_name" className="bg-gray-100 w-60 p-1 outline-none" placeholder="シリーズの名前" onChange={(i) => setSeriesTitle(i.target.value)} /></p>

            <p className="mb-4"><span className="inline-block my-2">あらすじ</span><br /><textarea name="series_summary" className="resize-none h-40 w-80 bg-gray-100 m-auto outline-none p-1" placeholder="シリーズの概要" onChange={(i) => { setSeriesCaption(i.target.value) }}></textarea></p>

            <div className="w-fit mx-auto mb-4 bg-accent2_C hover:bg-accent_C rounded-lg">
                <button type="submit" className="py-2 px-20 text-white">作成する</button>
            </div>

        </form>
    )
}