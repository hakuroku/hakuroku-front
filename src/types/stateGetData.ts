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
    seriesId: number;
    seriesTitle: string;
    seriesBgImg: string;
    seriesTopIcon: string;
    topUrl: { url: string };
}[] | void



export type {GetPostSeries, GetEpisode, GetTopInfo}