import { GetPostSeries, GetEpisode, GetTopInfo} from "../../types/stateGetData";

export interface GetSeriesDataStore {
    series: GetPostSeries;
    setSeries: (seriesList: GetPostSeries) => void
}

export interface GetEpisodeStore {
    episode: GetEpisode;
    setEpisode: (episodeData: GetEpisode) => void;
}

export interface GetTopInfoStore {
    topInfo: GetTopInfo;
    setTopInfo: (topData: GetTopInfo) => void
}

