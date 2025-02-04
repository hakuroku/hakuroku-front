import { PostSeries, Episodes, TopInfos} from "../../types/stateGetData";

export interface GetSeriesDataStore {
    series: PostSeries;
    setSeries: (seriesList: PostSeries) => void
}

export interface GetEpisodeStore {
    episode: Episodes;
    setEpisode: (episodeData: Episodes) => void;
}

export interface GetTopInfoStore {
    topInfo: TopInfos;
    setTopInfo: (topData: TopInfos) => void
}

