import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getData } from "./getData";
import { useAddIconData } from "../hooks/useAddIcon";
import { useModalIcon, useSelectSeriesDashBoard, useModalTopLinksSelect } from "../hooks/activeUIStore";
import { useSeriesTitlesGet } from "../hooks/useGetData";
import { ModalBack } from "../components/ModalBack";
import { ButtonSubmit } from "../components/ButtonSubmit";
import { SeriesTitles } from "../types/stateGetData";
import { FormSelectTitleUpdateLink } from "../components/FormSelectTitleUpdateLink";

export const FormDeleteIcon = () => {
    const navigate = useNavigate()
    const { addSeriesId, setAddSeriesId} = useAddIconData();
    const {modalDeleteIcon, setModalDeleteIcon } = useModalIcon();
    const { seriesTitles, setSeriesTitles} = useSeriesTitlesGet();
    const { setSeriesSelect} = useModalTopLinksSelect();
    const { setSeriesTitle } = useSelectSeriesDashBoard();
    

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
        setSeriesSelect(false)
        getData<SeriesTitles>('get/delete/top-links')
            .then((data) => setSeriesTitles(data))
            .catch((error) => console.error(error))
    }, [modalDeleteIcon])

    useEffect(() => {
        if (seriesTitles && seriesTitles.length > 0) {
            setAddSeriesId(seriesTitles[0].id);
            setSeriesTitle(seriesTitles[0].series_title);
        }
    }, [seriesTitles])


    return (
        <>
            <div className="bg-main_C w-[800px] h-fit m-auto p-6 rounded-lg fixed inset-2/4 translate-x-[-50%]  z-50  text-left">
                {seriesTitles === undefined || seriesTitles.length === 0 ? (
                    <>
                    <div className="text-center">
                        <p>※現在削除可能なシリーズはありません。</p>
                    </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={handlePostSubmit} encType="multipart/form-data">
                                <FormSelectTitleUpdateLink item={'削除するシリーズ：'} setState={setAddSeriesId} />
                            <div className="mx-auto w-fit">
                                <button type="submit"><ButtonSubmit text={'アイコンを削除する'} /></button>
                            </div>
                        </form>
                    </>
                    ) }
            </div>
            <div onClick={()=>{ setModalDeleteIcon(false)}}><ModalBack/></div>
            
            
        </>
    )
}