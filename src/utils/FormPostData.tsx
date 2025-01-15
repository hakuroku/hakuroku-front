import axios from 'axios';
import { usePostData, useSeriesGetData } from '../hooks/dataStore';
import { ComicDropZone } from '../components/ComicDropZone';
import { FormComicUpload } from '../components/FormComicUpload';
import { useEffect } from 'react';
import { ButtonSeriesSelect } from '../components/BottonSeriesSelect';
import { ModalSeriesForm } from '../components/ModalSeriesForm';
import { GetSeriesDataStore } from '../hooks/interface/comicData';
import { getData } from './getData';

export const FormPostData = () => {
    const { comic_content, comic_title, series_id, author_name, setComicTitle, setAuthorName } = usePostData();
    const { setSeries } = useSeriesGetData();

    console.log(comic_content);
    console.log(series_id);
    console.log(comic_title);
    console.log(author_name);
// -------------------------データ送信---------------------
    const PostComicData = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/upload'
            const formData = new FormData;

            if (comic_content) {
                Array.from(comic_content).forEach((file)=> {
                    formData.append('comic_content[]', file);
                });
            }

            formData.append('comic_title', comic_title,);
            if (series_id !== null) {
                formData.append('series_id', series_id.toString())
            }
            formData.append('author_name', author_name);

            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]); // ここで送信するデータが正しく含まれているか確認
            }

            const response = await axios.post(url, formData, {
                headers: {
                }
            });

            alert('投稿が完了しました。')
            console.log('Response:', response.data)
        } catch (error) {
            console.error('Error')
        }
    }

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        PostComicData();
    }

    
    // -------------------------データ取得---------------------
    useEffect(() => {
        getData<{series_id: number, series_title: string}[]>('getSeries')
        .then((data) => setSeries(data))
        .catch((error) => console.error(error))
    }, [])

    
    return (
        <>
        <form onSubmit={handlePostSubmit} encType="multipart/form-data" className="text-center">
                             
                            <ComicDropZone />

                            <FormComicUpload setComicTitle={setComicTitle} item={'作品名：'}/>
                            <FormComicUpload setComicTitle={setAuthorName} item={'著者名：'}/>
        
                            <div className="flex justify-center mb-10 mx-auto">
                                <p className="text-white"><span>シリーズ：</span></p>
                                <ButtonSeriesSelect />
                            </div>
        
                            <button type="submit" className="mb-10 px-7 py-2 bg-accent_C rounded-lg hover:bg-accent2_C"><span className="text-white">掲載する</span></button>
        
                        </form>
        
                        <ModalSeriesForm />
                        </>
    )
}


