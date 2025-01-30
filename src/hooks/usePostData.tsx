import { create } from "zustand";
import { PostComicStore, PostSeriesStore} from "./interface/postDataStore";

export const usePostComic = create<PostComicStore>((set)=> ({
    comic_content: null,
    comic_title: '',
    comic_caption: '',
    series_id: null,
    author_name: '',
    setComicContent: (contentList) => set({ comic_content: contentList }),
    setComicTitle: (comicTitle) => set({ comic_title: comicTitle }),
    setComicCaption: (comicCaption) => set({ comic_caption: comicCaption}),
    setSeriesId: (seriesId) => set({ series_id: seriesId } ),
    setAuthorName: (authorName) => set({ author_name: authorName }),
}))

export const usePostSeries = create<PostSeriesStore>((set) => ({
    series_title: '',
    series_caption: '',
    setSeriesTitle: (seriesTitle) => set({ series_title: seriesTitle }),
    setSeriesCaption: (seriesCaption) => set({ series_caption: seriesCaption })
}))
