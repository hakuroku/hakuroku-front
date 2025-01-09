import axios from "axios";


export const getData = async (endpoint: string ) => {
    try {
        const url = 'http://127.0.0.1:8000/api/' + endpoint;
        const response = await axios.get(url);
        const result = response.data;
        console.log(result);
        return result;
    } catch (error) {
        console.error('データを取得できませんでした。')
    }
}


