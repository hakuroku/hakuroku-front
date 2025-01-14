import axios, {AxiosResponse} from "axios";


export const getData = async <T>(endpoint: string): Promise<T | undefined> => {
    try {
        const url: string = 'http://127.0.0.1:8000/api/' + endpoint;
         //awaitでPromiseを解除
        const response: AxiosResponse<T> = await axios.get(url); //Promise<AxiosResponse<any, any>> -> AxiosResponse<any, any>
        const result: T = response.data;
        //AxiosResponse<any, any>のdataプロパティに目的の型データが存在。
        console.log(result);
        return result; //Promiseに包んで返却
    } catch (error) {
        console.error('データを取得できませんでした。')
        return undefined;
    } 
}
