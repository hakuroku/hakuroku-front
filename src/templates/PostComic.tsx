import axios from "axios";
import { usePostData, useSeriesGetData } from "../hooks/dataStore"

export const PostComic = () => {

    const { comic_content, setComicContent, comic_title, setComicTitle, series_id, author_name, setAuthorName } = usePostData();

    const postData = async () => {
        try {
            const postUrl: string = 'http://127.0.0.1:8000/api/upload'
            const data = {
                comic_content: comic_content,
                comic_title: comic_title,
                series_id: series_id,
                author_name: author_name
            }

            console.log(data)
            const response = await axios.post(postUrl, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Response:', response.data);
        } catch {
            console.error('Error')
        }
    }

    return (
        <div>
        </div>
    )
}