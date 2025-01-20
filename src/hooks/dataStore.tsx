import { create } from "zustand";
import { PostDataStore, GetSeriesDataStore, GetEpisode} from "./interface/comicData";

export const usePostData = create<PostDataStore>((set)=> ({
    comic_content: null,
    comic_title: '',
    series_id: null,
    author_name: '',
    series_title: '',
    series_caption: '',

    setComicContent: (contentList) => set({ comic_content: contentList }),
    setComicTitle: (comicTitle) => set({ comic_title: comicTitle }),
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