import {EpisodeContent, EpisodeInfo } from "./getData";

type GetPostSeries = {
    id: number;
    series_title: string
}[] | void;

type GetEpisode = {
    episodeContent: EpisodeContent,
    episodeInfo: EpisodeInfo
} | void

type GetTopInfo = {
    seriesId: number[];
    seriesTitles: { title: string }[];
    seriesBgImgs: string[];
    seriesTopIcons: string[];
    topUrls: { url: string }[];
} | void

export type {GetPostSeries, GetEpisode, GetTopInfo}