export interface PostDataStore {
    comic_content: File[] | null;
    comic_title: string;
    comic_caption: string;
    series_id: number | null;
    author_name: string;
    series_title: string;
    series_caption: string;

    setComicContent: (contentList: File[] | null) => void;
    setComicTitle: (comicTitle: string) => void;
    setComicCaption: (comicCaption: string) => void;
    setSeriesId: (seriesId: number) => void;
    setAuthorName: (authorName: string) => void;
    setSeriesTitle: (seriesTitle: string) => void;
    setSeriesCaption: (seriesCaption: string) => void;
}

export interface GetSeriesDataStore {
    series: {id: number, series_title: string}[];
    setSeries: (seriesList: {id: number, series_title: string}[] | undefined) => void
}

export interface GetEpisode {
    episode: { pages: string[] },
    setEpisode: (episodeData: { pages: string[] } | undefined)  => void;
}

export interface getTopInfo {
   topInfo: {url: string }[],
    setTopInfo: (topData: { url: string }[] | undefined) => void 
}