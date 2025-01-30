import { create } from "zustand"
import { GetSeriesDataStore, GetEpisodeStore, GetTopInfoStore } from "./interface/getDataStore"


export const useSeriesGetData = create<GetSeriesDataStore>((set) => ({
    series: [],
    setSeries: (seriesList) => set({ series: seriesList })
}))

export const useEpisodeData = create<GetEpisodeStore>((set) => ({
    episode: { episodeContent: {pages: []}, episodeInfo: [] },
    setEpisode: ( episodeData ) => set({ episode: episodeData })
}))

export const useTopInfo = create<GetTopInfoStore>((set) => ({
    topInfo: [],
    setTopInfo: ( topData ) => set({ topInfo: topData})
}))


