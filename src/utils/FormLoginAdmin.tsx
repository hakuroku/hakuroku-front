import axios from 'axios';
import { ButtonSubmit } from '../components/ButtonSubmit';
import { useLoginAdminName, useLoginAdminPass } from '../hooks/useLogin';
import { FormComicUpload } from '../components/FormComicUpload';

export const FormLogInAdmin = () => {
    const { nameAdmin, setNameAdmin } = useLoginAdminName();
    const { passAdmin, setPassAdmin } = useLoginAdminPass();

    const login = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/admin/login',{
                nameAdmin,
                passAdmin
            });
            localStorage.setItem('authToken', response.data.token);
        } catch (error){
            console.error('Login failed', error);
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login();
    }

    return (
        <form onSubmit={handleSubmit} className='text-center'>
            <div className='bg-main_C w-[400px] mx-auto p-8 mb-8 '>
                <FormComicUpload item='ユーザー名：' text='user_name' setState={setNameAdmin} />
                <FormComicUpload item='パスワード：' text='password' setState={setPassAdmin} />
                <button type='submit' className='pt-8'><ButtonSubmit text={'ログインする'}/></button>
            </div>
        </form>
    )
}