import { useEffect } from "react";
import { useGetIcon } from "../hooks/dataStore";
import { getData } from "./getData";




export const FormAddIcon = () => {
    const {seriesIcon, setSeriesIcon} = useGetIcon()

    useEffect(() => {
        getData<{ id: number, title: string }[]>('getIcons')
        .then((data) => setSeriesIcon(data))
        .catch((error)=> console.error(error));
    },[])

    console.log(seriesIcon)
    return (
        <>
            <form action="">
                
            </form>
        </>
    )
}