import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { usePostEpisode} from '../hooks/usePostData';
import { useSeriesGetData } from '../hooks/useGetData';
import { useSelectViewSeries } from '../hooks/activeUIStore';
import { ComicDropZone } from '../components/ComicDropZone';
import { FormComicUpload } from '../components/FormComicUpload';
import { ButtonSeriesSelect } from '../components/ButtonSeriesSelect';
import { ModalSeriesForm } from '../components/ModalSeriesForm';
import { TextareaComicUpload } from '../components/TextareaComicUpload';
import { getData } from './getData';
import { PostSeries } from '../types/stateGetData';

export const FormUploadData = () => {
    const { episode_content, episode_title, episode_caption, series_id, author_name, setEpisodeContent, setEpisodeTitle, setEpisodeCaption, setSeriesId, setAuthorName } = usePostEpisode();
    const { setSeries } = useSeriesGetData();
    const { setSelectViewSeriesTitle } = useSelectViewSeries();
    const location = useLocation();
    const navigate = useNavigate();
    
    // -------------------------データ送信---------------------
    const PostEpisode = async () => {
        try {
            const url = 'http://127.0.0.1:8000/api/upload'
            const formData = new FormData();
            const data = {
                'episode_title': episode_title,
                'episode_caption': episode_caption,
                'series_id': series_id !== null ? series_id.toString() : null,
                'author_name': author_name,
            }
            for (const [key, value] of Object.entries(data)) {
                if (value) {
                    formData.append(key, value.toString());
                } else {
                    navigate('/default')
                }}
                
            if (episode_content && Array.isArray(episode_content)) {
                Array.from(episode_content).forEach((file) => {
                    formData.append('episode_content[]', file as File);
                })

                const response = await axios.post(url, formData, {
                    headers: {
                    },
                    maxContentLength: Infinity,
                    maxBodyLength: Infinity,
                });
                console.log('Response:', response.data)
                navigate('/success')
            } else {
                navigate('/default')  
            }
        } catch (error) {
            console.error('Error')
        }
    }

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        PostEpisode();
    }


    // -------------------------データ取得---------------------
    useEffect(() => {
        getData<PostSeries>('get/upload-series')
            .then((data) => setSeries(data))
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        setEpisodeContent(null);
        setEpisodeTitle('');
        setEpisodeCaption('');
        setSeriesId(null);
        setAuthorName('');
        setSelectViewSeriesTitle('');
    }, [location])


    return (
        <>
            <form onSubmit={handlePostSubmit} encType="multipart/form-data" className="text-center">

                <ComicDropZone />
                <div className='bg-white w-[400px] mx-auto p-8 mb-8 '>
                    <FormComicUpload setState={setEpisodeTitle} item='作品名' text='エピソード・タイトル' />
                    <TextareaComicUpload setState={setEpisodeCaption} item='キャプション' text='あらすじ等' />
                    <FormComicUpload setState={setAuthorName} item='著者名' text='作者名' />

                    <div className="flex justify-end mx-auto items-center">
                        <p className='w-1/3 text-right font-serif pr-2'><span>シリーズ</span></p>
                        <ButtonSeriesSelect />
                    </div>
                </div>

                <button type="submit" className="mb-10 px-7 py-2 bg-accent_C rounded-lg hover:bg-accent2_C"><span className="text-white">掲載する</span></button>

            </form>
            <ModalSeriesForm />
        </>
    )
}


