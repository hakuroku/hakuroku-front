import { PostSeries, Episodes, TopInfos, SeriesList} from "../../types/stateGetData";

export interface GetSeriesListStore {
    seriesList: SeriesList;
    setSeriesList: (seriesList: SeriesList) => void;
}

export interface GetSeriesDataStore {
    series: PostSeries;
    setSeries: (seriesList: PostSeries) => void;
}

export interface GetEpisodeStore {
    episode: Episodes;
    setEpisode: (episodeData: Episodes) => void;
}

export interface GetTopInfoStore {
    topInfo: TopInfos;
    setTopInfo: (topData: TopInfos) => void;
}

