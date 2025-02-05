import { create } from "zustand";
import { PostEpisodeStore, PostSeriesStore} from "./interface/postDataStore";

export const usePostComic = create<PostEpisodeStore>((set)=> ({
    episode_content: null,
    episode_title: '',
    episode_caption: '',
    series_id: null,
    author_name: '',
    setEpisodeContent: (contentList) => set({ episode_content: contentList }),
    setEpisodeTitle: (comicTitle) => set({ episode_title: comicTitle }),
    setEpisodeCaption: (comicCaption) => set({ episode_caption: comicCaption}),
    setSeriesId: (seriesId) => set({ series_id: seriesId } ),
    setAuthorName: (authorName) => set({ author_name: authorName }),
}))

export const usePostSeries = create<PostSeriesStore>((set) => ({
    series_title: '',
    series_caption: '',
    setSeriesTitle: (seriesTitle) => set({ series_title: seriesTitle }),
    setSeriesCaption: (seriesCaption) => set({ series_caption: seriesCaption })
}))
