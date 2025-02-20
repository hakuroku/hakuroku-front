import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAddIconData } from "../hooks/useAddIcon";
import { useModalIcon } from "../hooks/activeUIStore";
import { useSeriesTitlesGet } from "../hooks/useGetData";
import { getData } from "./getData";
import { ModalBack } from "../components/ModalBack";
import { ButtonSubmit } from "../components/ButtonSubmit";
import { SeriesTitles } from "../types/stateGetData";

export const FormDeleteIcon = () => {
    const navigate = useNavigate()
    const { addSeriesId, setAddSeriesId} = useAddIconData();
    const {modalDeleteIcon, setModalDeleteIcon } = useModalIcon();
    const { seriesTitles, setSeriesTitles} = useSeriesTitlesGet();

    console.log(addSeriesId)
    const UpdateIcon = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/delete/top-link'
            const formData = new FormData();
            if (addSeriesId){
                formData.append('series_id', addSeriesId.toString())
            }
            const response = await axios.post(url, formData, {
                headers: {
                }
            });
            console.log('Response:', response.data)
            navigate('/success')
        } catch (error) {
            console.error('Error')
        }
    }

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        UpdateIcon();
    }

    useEffect(() => {
        setAddSeriesId(null);
        getData<SeriesTitles>('get/delete/top-links')
            .then((data) => setSeriesTitles(data))
            .catch((error) => console.error(error))
    }, [modalDeleteIcon])

    console.log(seriesTitles)
    return (
        <>
            <div className="bg-main_C w-[800px] h-fit m-auto p-6 rounded-lg fixed inset-2/4 translate-x-[-50%]  z-50  text-left" >
                <form onSubmit={handlePostSubmit} encType="multipart/form-data">
                    <p className="text-center mb-8">削除するシリーズ：<input type="number" name="addIconSeriesId" onChange={(e) => setAddSeriesId(Number(e.target.value))} /><br /></p>
                    <div className="mx-auto w-fit">
                        <button type="submit"><ButtonSubmit text={'アイコンを削除する'}/></button>
                    </div>
                </form>
            </div>
            <div onClick={()=>{ setModalDeleteIcon(false)}}><ModalBack/></div>
        </>
    )
}