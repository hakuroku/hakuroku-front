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
    setSeriesId: (seriesId: number | null) => void;
    setAuthorName: (authorName: string) => void;
    setSeriesTitle: (seriesTitle: string) => void;
    setSeriesCaption: (seriesCaption: string) => void;
}

export interface GetSeriesDataStore {
    series: {id: number, series_title: string}[];
    setSeries: (seriesList: {id: number, series_title: string}[] | undefined) => void
}

export interface GetEpisode {
    episode: { 
        content: { pages: string[] }, 
        comicInfo: {comic_id: number, comic_title: string, comic_thumnail: string, comic_url: string }[]
    } | undefined,
    setEpisode: (episodeData: { content: { pages: string[] }, comicInfo: { comic_id: number, comic_title: string, comic_thumnail: string, comic_url: string }[] } | undefined)  => void;
}

export interface getTopInfo {
    topInfo: {
        titleSet: { title: string }[] , 
        urls: {url: string }[]
    }  | undefined ,
    setTopInfo: (topData:  {titleSet: { title: string }[] , urls: {url: string }[]} | undefined ) => void 
}

export interface getIcon { 
    seriesIcon: {
        id: number; 
        title: string; 
    }[] | undefined;  
    setSeriesIcon: (getData: { id: number; title: string; }[] | undefined) => void;
}