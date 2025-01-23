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
            await getData<{id: number, series_title: string}[]>('getSeries')
            .then((data) => setSeries(data))
            .catch((error) => console.error(error))
            setSeriesModal(false)
        } catch {
            console.error('データの送信が失敗しました')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postData();
    } 

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">

            <div className="flex border-b items-center pb-2">
                <div className=" py-4 w-1/3"><span className="mr-4 font-serif">シリーズ名</span>
                </div>
                <input type="text" name="series_name" className="bg-gray-100 w-full h-8 py-1 px-2 outline-none" placeholder="シリーズの名前" onChange={(i) => setSeriesTitle(i.target.value)} />
            </div>
            <p className="mb-4"><span className="inline-block my-2 font-serif">あらすじ</span><br />
            <textarea name="series_summary" className="resize-none h-40 w-full bg-gray-100 m-auto outline-none px-2 py-1" placeholder="シリーズの概要" onChange={(i) => { setSeriesCaption(i.target.value) }}></textarea></p>

            
            <button type="submit" className="w-[240px] block mx-auto mb-4 bg-accent2_C hover:bg-accent_C rounded-lg py-2 text-white">作成する</button>
            

        </form>
    )
}