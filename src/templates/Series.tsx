import { useEffect } from "react";
import { getData } from "../utils/getData";
import { useSeriesListGetData } from "../hooks/useGetData";
import { SeriesList } from "../types/stateGetData";
import { SeriesItem } from "../components/SeriesItem";

export const Series = () => {
    const {seriesList, setSeriesList} = useSeriesListGetData();
    useEffect(() => {
        getData<SeriesList>(`get/seriesList`)
            .then((data) => setSeriesList(data))
            .catch((error) => console.error(error))
    }, [])

    console.log(seriesList)
    return(
        <ul>
            <SeriesItem/>
        </ul>
    )
}