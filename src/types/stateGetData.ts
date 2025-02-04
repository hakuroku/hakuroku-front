import {EpisodeContent, EpisodeInfo } from "./getData";

type PostSeries = {
    id: number;
    series_title: string
}[] | void;

type Episodes = {
    episodeContent: EpisodeContent,
    episodeInfo: EpisodeInfo
} | void

type TopInfos = {
    seriesId: number;
    seriesTitle: string;
    seriesBgImg: string;
    seriesTopIcon: string;
    topUrl: string ;
}[] | void



export type {PostSeries, Episodes, TopInfos}