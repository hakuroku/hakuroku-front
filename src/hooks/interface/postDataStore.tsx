import {EpisodeContent, EpisodeTitle, EpisodeCaption, SeriesId, AuthorName, SeriesTitle, SeriesCaption } from "../../types/statePostData";

export interface PostEpisodeStore {
    episode_content: EpisodeContent;
    episode_title: EpisodeTitle;
    episode_caption: EpisodeCaption;
    series_id: SeriesId;
    author_name: AuthorName;
    setEpisodeContent: (episodeContentList: File[] | null) => void;
    setEpisodeTitle: (episodeTitle: string) => void;
    setEpisodeCaption: (episodeCaption: string) => void;
    setSeriesId: (seriesId: number | null) => void;
    setAuthorName: (authorName: string) => void;
}

export interface PostSeriesStore {
    series_title: SeriesTitle;
    series_caption: SeriesCaption;
    setSeriesTitle: (seriesTitle: string) => void;
    setSeriesCaption: (seriesCaption: string) => void;
}
