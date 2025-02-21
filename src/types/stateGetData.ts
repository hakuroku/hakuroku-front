type SeriesListInfo = {
    id: number;
    series_title: string;
    series_caption: string;
}[];

type SeriesListUrl = {
    url: string;
}[];

type SeriesList  = {
    seriesListInfo: SeriesListInfo;
    seriesListUrl: SeriesListUrl;
} | void;

type PostSeries = {
    id: number;
    series_title: string
}[] | void;

type EpisodeContent = string[];

type EpisodeInfo = { 
    episode_title: string;
    episode_url: string;
    updated_at: string;
}[]

type SeriesInfo = {
    series_title: string;
    series_caption: string;
} 

type SeriesTitles  = { id: number; series_title: string}[] | void

type Episodes = {
    episodeContent: EpisodeContent;
    seriesInfo: SeriesInfo;
    episodeInfo: EpisodeInfo;
} | void

type TopInfos = {
    seriesTitle: string[];
    seriesMainImg: string[];
    seriesLinkImg: string[];
    episodeUrl: string[];
} | void



export type {PostSeries, Episodes, TopInfos, SeriesList, SeriesTitles}