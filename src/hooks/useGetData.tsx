import { create } from "zustand"
import { GetSeriesDataStore, GetEpisodeStore, GetTopInfoStore, GetSeriesListStore, GetSeriesTitlesStore} from "./interface/getDataStore"

export const useSeriesListGetData = create<GetSeriesListStore>((set) => ({
    seriesList: undefined,
    setSeriesList: (sl) => set({ seriesList: sl})
}))

export const useSeriesGetData = create<GetSeriesDataStore>((set) => ({
    series: [],
    setSeries: (seriesList) => set({ series: seriesList })
}))

export const useSeriesTitlesGet = create<GetSeriesTitlesStore>((set) => ({
    seriesTitles: [],
    setSeriesTitles: (sl) => set({ seriesTitles: sl})
}))

export const useEpisodeData = create<GetEpisodeStore>((set) => ({
    episode: { episodeContent: [], seriesInfo: {series_title: '', series_caption: ''}, episodeInfo: [] },
    setEpisode: ( episodeData ) => set({ episode: episodeData })
}))

export const useTopInfo = create<GetTopInfoStore>((set) => ({
    topInfo: undefined,
    setTopInfo: ( topData ) => set({ topInfo: topData})
}))


