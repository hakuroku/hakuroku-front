import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAddIconData } from "../hooks/useAddIcon";
import { useModalIcon } from "../hooks/activeUIStore";
import { ModalBack } from "../components/ModalBack";
import { FormSelectTilteUpdateLink } from "../components/FormSelectTitleUpdateLink";

export const FormAddIcon = () => {
    const navigate = useNavigate()
    const { addSeriesId, addTopView, addLinkView, setAddSeriesId,setAddTopView, setAddLinkView} = useAddIconData();
    const { setModalAddIcon} = useModalIcon();

    console.log(addSeriesId, addTopView, addLinkView)
    const updateData = {
        'series_id': addSeriesId?.toString(),
        'top_main_img': addTopView,
        'top_link_img': addLinkView
    }
    const AddIcon = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/add/top-link'
            const formData = new FormData();
            
            for (const [key, value] of Object.entries(updateData)) {
                if (value) {
                    if (value instanceof File) {
                        formData.append(key, value);
                    } else {
                        formData.append(key, value.toString());
                    }
                } else {
                    navigate('/default')
                }
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
        AddIcon();
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): File | null => {
        const files = e.target.files
        if (files && files.length > 0) {
            const file = files[0];
            return file
        } else {
            return null
        }
    }
    return (
        <>
            <div className="bg-main_C w-[800px] h-fit m-auto p-6 rounded-lg fixed inset-2/4 translate-x-[-50%]  z-50  text-left" >
                <form onSubmit={handlePostSubmit} encType="multipart/form-data">
                    <FormSelectTilteUpdateLink item={'追加するシリーズ：'} setState={setAddSeriesId}/>
                    <div className="flex justify-between p-8">
                        <input type="file" name="addIconTopVIew" onChange={(e)=>setAddTopView(handleFileChange(e))}/><br />
                        <input type="file" name="addIconView" onChange={(e) => setAddLinkView(handleFileChange(e))} /><br />
                    </div>
                    <div className="w-fit m-auto">
                        <button type="submit" className="px-7 py-2 bg-accent_C rounded-lg hover:bg-accent2_C"><span className="text-white">アイコンを追加する</span></button>
                    </div>
                </form>
            </div>

            <ModalBack setModal={setModalAddIcon}/>
        </>
    )
}