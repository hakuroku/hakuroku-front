import { create } from "zustand";
import { PostDataStore, GetSeriesDataStore, GetEpisode, getTopInfo} from "./interface/comicData";

export const usePostData = create<PostDataStore>((set)=> ({
    comic_content: null,
    comic_title: '',
    comic_caption: '',
    series_id: null,
    author_name: '',
    series_title: '',
    series_caption: '',

    setComicContent: (contentList) => set({ comic_content: contentList }),
    setComicTitle: (comicTitle) => set({ comic_title: comicTitle }),
    setComicCaption: (comicCaption) => set({ comic_caption: comicCaption}),
    setSeriesId: (seriesId) => set({ series_id: seriesId }),
    setAuthorName: (authorName) => set({ author_name: authorName }),
    setSeriesTitle: (seriesTitle) => set({ series_title: seriesTitle }),
    setSeriesCaption: (seriesCaption) => set({ series_caption: seriesCaption })
}))

export const useSeriesGetData = create<GetSeriesDataStore>((set) => ({
    series: [],
    setSeries: (seriesList) => set({ series: seriesList })
}))

export const useEpisodeData = create<GetEpisode>((set) => ({
    episode: { pages: []},
    setEpisode: ( episodeData ) => set({ episode: episodeData})
}))

export const useTopInfo = create<getTopInfo>((set) => ({
    topInfo: {titleSet: [], urls:[]},
    setTopInfo: ( topData ) => set({ topInfo: topData})
}))