import axios from 'axios';
import { usePostData, useSeriesGetData } from '../hooks/dataStore';
import { ComicDropZone } from '../components/ComicDropZone';
import { useEffect } from 'react';
import { ButtonSeriesSelect } from '../components/BottonSeriesSelect';
import { ModalSeriesForm } from '../components/ModalSeriesForm';

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
            const data = {
                comic_content: comic_content,
                comic_title: comic_title,
                series_id: series_id,
                author_name: author_name
            }

            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

    const getData = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/getSeries';
            const response = await axios.get(url);
            const result = response.data;
            console.log(result);
            setSeries(result);
        } catch (error) {
            console.error('データを取得できませんでした。')
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        <form onSubmit={handlePostSubmit} encType="multipart/form-data" className="text-center">
        
                            <ComicDropZone />
                            <input type="file" name="comic_content[]" multiple className="mb-10 text-white" />
                            <br />
        
                            <p><label ><span className="text-white">作品名：</span><input type="text" name="comic_title" className="mb-3 p-1 h-6 w-60 outline-none" onChange={(e) => setComicTitle(e.target.value)} /></label><br /></p>
        
                            <p><label><span className="text-white">著者名：</span><input type="text" name="author_name" className="mb-4 p-1 h-6 w-60 outline-none" onChange={(e) => setAuthorName(e.target.value)} /></label><br /></p>
        
        
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


