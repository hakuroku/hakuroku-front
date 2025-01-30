import {ComicContent, ComicTitle, ComicCaption, ComicId, AuthorName, SeriesTitle, SeriesCaption } from "../../types/statePostData";

export interface PostComicStore {
    comic_content: ComicContent;
    comic_title: ComicTitle;
    comic_caption: ComicCaption;
    series_id: ComicId;
    author_name: AuthorName;
    setComicContent: (contentList: File[] | null) => void;
    setComicTitle: (comicTitle: string) => void;
    setComicCaption: (comicCaption: string) => void;
    setSeriesId: (seriesId: number | null) => void;
    setAuthorName: (authorName: string) => void;
}

export interface PostSeriesStore {
    series_title: SeriesTitle;
    series_caption: SeriesCaption;
    setSeriesTitle: (seriesTitle: string) => void;
    setSeriesCaption: (seriesCaption: string) => void;
}
