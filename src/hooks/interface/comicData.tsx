export interface PostDataStore {
    comic_content: object[];
    comic_title?: string;
    series_id?: number;
    author_name?: string;
    series_title?: string;
    series_caption?: string;

    setComicContent: (contentList: object[]) => void;
    setComicTitle: (comicTitle: string) => void;
    setSeriesId: (seriesId: number) => void;
    setAuthorName: (authorName: string) => void;
    setSeriesTitle: (seriesTitle: string) => void;
    setSeriesCaption: (seriesCaption: string) => void;
}

export interface GetSeriesDataStore {
    series: {series_id: number, series_title: string}[];
    setSeries: (seriesList: object[]) => void
}